
const mongoose =require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/expressDB")


const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    is_married:{type:Boolean,required:true},
    city:{type:String,required:true}
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    connection,
    UserModel
}
