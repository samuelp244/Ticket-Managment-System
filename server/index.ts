import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/user.model'
import Customer from './models/customer.model'

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/ticket-management-system')

app.post('/api/v1/registerRootUser',async (req:Request,res:Response)=>{
    try {
        await User.create({
            username: req.body.username,
            organization: req.body.organization,
            role:'rootUser',
            email: req.body.email,
            password: req.body.password
        })
        res.json({status:'ok'})
    } catch (err){
        res.json({status:'error',error:'credentials already exists'})
    }
})

app.post('/api/v1/registerCustomer',async (req:Request,res:Response)=>{
    
    try {
        await Customer.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status:'ok'})
    } catch (err){
        console.log(err)
        res.json({status:'error',error:'credentials already exists'})
    }
})

app.post('/api/v1/loginUser',async (req:Request,res:Response)=>{
    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    })
    // console.log(user)
    if(user){
        res.json({status:'ok', user:true, role:user?.role})
    }else{
        res.json({status:'error', user:false})
    }
})

app.post('/api/v1/loginCustomer',async (req:Request,res:Response)=>{
    const user = await Customer.findOne({
        username:req.body.username,
        password:req.body.password
    })
    // console.log(user)
    if(user){
        res.json({status:'ok', user:true})
    }else{
        res.json({status:'error', user:false})
    }
})


app.listen(1337,()=>{
    console.log("app started at 1337")
});