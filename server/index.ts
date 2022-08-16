import express, { Express, Request, Response } from 'express'
import cors from 'cors';

const app:Express = express();
app.use(express.json())
app.use(cors())

app.get('/',(req:Request,res:Response)=>{
    res.send('hello')
})


app.listen(1337,()=>{
    console.log("app started at 1337")
});