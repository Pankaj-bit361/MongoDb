const express=require("express")
// const mongoose=require("mongoose")
const { connection,UserModel } = require("./db")


const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home Page")
})



app.post("/adduser",async (req,res)=>{
    const data=req.body
    console.log(req.body)
    const user=new UserModel(data)
    await user.save()
    res.send("added the new user")
})

app.get("/users",async(req,res)=>{
    const users=await UserModel.find()
    res.send(users)
})



app.listen(4500,async ()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
        console.log("something went wrong")
    }
  
    console.log("server is running on port 4500")
})