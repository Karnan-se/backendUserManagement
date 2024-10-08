
export const validateForm = (name, email, password , confirmPassword,setError, isSubmit) => {
  console.log("called")

    const newError= {
      name: name && name.length < 3 ,
      email: email && !/\S+@\S+\.\S+/.test(email), 
      password: password && password.length < 6, 
      confirmPassword : confirmPassword && password != confirmPassword
    };
   
 
    setError((prev) => ({
      ...prev, 
      ...newError, 
      
  }));

  let newErrorState

  if(isSubmit){
         newErrorState = { ...newError };  

        Object.keys(newErrorState).forEach(key => {
          if (newErrorState[key] !== false && newErrorState[key] == "") {
            newErrorState[key] = true;  
          }
        });
        setError(newErrorState)
  }
  if(newErrorState){
    return !Object.values(newErrorState).includes(true);

  }
   
  };
  