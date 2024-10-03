import mongoose from "mongoose"


const connectDb = async()=>{
    try{
      await  mongoose.connect("mongodb://localhost:27017")
      console.log("dbConnected")

    }catch(error){
        console.log(error.message)

    }
}
export default connectDb