const mongoose=require("mongoose")


const main=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/learnmongo")
        console.log("connected to the DB")
        const user=new Usermodel({
            name:"rohit",
            age:"35",
            city:"delhi"

        })

        await user.save()
    }catch(err){
console.log("Cannot connect to DB")
console.log(err)
    }
    
}
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true},
    city:{type:String,require:true}
},{
    versionKey:false
})

const Usermodel=mongoose.model("user",userSchema)


main()