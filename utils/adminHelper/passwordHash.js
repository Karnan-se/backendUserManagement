import bcrypt from "bcrypt"



const passwordHash = async(password=123)=>{
    
    const SaltRound = 10;
    const Password = password;
   const HashedPassword = bcrypt.hash(password, SaltRound)
   return HashedPassword;

}

export {passwordHash}