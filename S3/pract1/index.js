
const mongoose=require("mongoose")

const main=async()=>{
 
    try {
        
const connection =await mongoose.Connection(' mongodb://127.0.0.1:27017')
console.log("connection with db")
mongoose.disconnect()
console.log("diconnectes db")

    } catch (error) {
        console.log(error)
    }

}
main()