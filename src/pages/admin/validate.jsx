
export const validateForm = ( name, email, password , setError) => {
    console.log(email, name, password)
    const newError= {
      name: name && name.length < 3,
      email: email && !/\S+@\S+\.\S+/.test(email), 
      password: password && password.length < 6, 
    };
 
    setError((prev) => ({
      ...prev, 
      ...newError, 
  }));
    return !Object.values(newError).includes(true);
  };
  