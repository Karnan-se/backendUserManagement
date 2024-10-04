import bcrypt from "bcrypt"

const passWordCompare =async(password, hashedPassword)=>{
   const isMatching = await bcrypt.compare(password, hashedPassword)
   return isMatching

}


export {passWordCompare}