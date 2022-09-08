import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/user.model'
import Customer from './models/customer.model'
import Organization from './models/organizations.model'
import tickets from './models/tickets.model'
import { getUserTickets } from './Requests/customer';
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/ticket-management-system')

app.post('/api/v1/registerRootUser',async (req:Request,res:Response)=>{
    try {
        await User.create({
            username: req.body.username,
            role:'rootUser',
            email: req.body.email,
            password: req.body.password
        })
        await Organization.create({
            organizationName:req.body.organization,
            rootUser:{
                username:req.body.username,
                email: req.body.email
            },
            employees:[]
        })
        res.json({status:'ok'})
    } catch (err){
        res.json({status:'error',error:'credentials already exists'})
    }
})

app.post('/api/v1/registerCustomer',async (req:Request,res:Response)=>{
    
    try {
        await User.create({
            username: req.body.username,
            role:'customer',
            email: req.body.email,
            password: req.body.password
        })
        await Customer.create({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone
        })
        res.json({status:'ok'})
    } catch (err){
        console.log(err)
        res.json({status:'error',error:'credentials already exists'})
    }
})

app.post('/api/v1/loginUser',async (req:Request,res:Response)=>{
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    })
    // console.log(user)

    if(user){
        res.json({status:'ok', user:true, role:user?.role, username:user?.username})
    }else{
        res.json({status:'error', user:false})
    }
})


app.get('/api/v1/getOrganizationsList',async (req:Request,res:Response)=>{
    try{
        const data = await Organization.find();
        const orgNames = data.map(i=>i.organizationName);
        res.json({organizations:orgNames});
    }catch(err){
        console.log(err);
        res.json({status:'error', error:err})
    }
})

app.post('/api/v1/addNewTicket',async(req:Request,res:Response)=>{
    try{
        await tickets.create({
            organizationName:req.body.organizationName,
            category:req.body.category,
            username:req.body.username,
            query:req.body.query,
            publishedAt: new Date().toISOString(),
            status:'Active'
        })    
        res.json({status:'ok'})
    }catch(err){
        res.json({status:'error', error:err})
        console.log(err)
    }
})

app.get('/api/v1/getUserTickets',getUserTickets)

app.post('/api/v1/addEmployee',async(req:Request,res:Response)=>{
    try{
        if(req.body.rootUser){
            await Organization.updateOne(
                {"rootUser.username":req.body.rootUser},
                {$push:{employees:{
                    username:req.body.username,
                    email:req.body.email,
                    assignedDomain:req.body.assignedDomain,
                    assignedTickets:{}
                }}}
            )
    
            await User.create({
                username:req.body.username,
                email:req.body.email,
                role:"employee",
                password:req.body.password
            })
            res.json({status:'ok'})
        }
        

    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.get('/api/v1/getAllTickets',async(req:Request,res:Response)=>{
    try{
        const org = await Organization.findOne({"employees.username":req.query.username})
        const data = await tickets.find({organizationName:org?.organizationName})
        res.json({tickets:data})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.get('/api/v1/getAllEmployees',async(req:Request,res:Response)=>{
    try{
        const org = await Organization.findOne({"rootUser.username":req.query.username});
        res.json({employees:org?.employees})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.get('/api/v1/closeCustomerTicket',async(req:Request,res:Response)=>{
    try{
        await tickets.findOneAndUpdate(
            {_id:req.query.id},
            {status:"closed"}
        )
        const ticket = await tickets.findOne({_id:req.query.id});
        const userTickets = await tickets.find({username:ticket?.username});
        res.json({tickets:userTickets});
    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.get('/api/v1/acceptTicket',async(req:Request,res:Response)=>{
    try{
        await tickets.findOneAndUpdate(
            {_id:req.query.id},
            {status:"Accepted"}
        )
        await Organization.findOneAndUpdate(
            {"employees.username":req.query.username},
            {$set:{"employees.$.assignedTickets":req.query.id}}
        )
        const org = await Organization.findOne({"employees.username":req.query.username})
        const data = await tickets.find({organizationName:org?.organizationName})
        res.json({tickets:data})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.get('/api/v1/closeTicketEmployee',async(req:Request,res:Response)=>{
    try{
        await tickets.findOneAndUpdate(
            {_id:req.query.id},
            {status:"closed"}
        )
        await Organization.findOneAndUpdate(
            {"employees.username":req.query.username},
            {$set:{"employees.$.assignedTickets":null}}
        )
        const org = await Organization.findOne({"employees.username":req.query.username})
        const data = await tickets.find({organizationName:org?.organizationName})
        res.json({tickets:data})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.get('/api/v1/getAllOrgTickets',async(req:Request,res:Response)=>{
    try{
        const org = await Organization.findOne({"rootUser.username":req.query.username})
        const data = await tickets.find({organizationName:org?.organizationName})
        res.json({tickets:data})
    }catch(err){
        console.log(err)
        res.json({status:'error',error:err})
    }
})

app.listen(1337,()=>{
    console.log("app started at 1337")
});