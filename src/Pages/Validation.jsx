
const Validation = (values) => {
    const errors ={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if(values.email === ""){
        errors.email = "Email  is require"
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "Email did not match"
    }

    if(values.password === ""){
        errors.password = "password require"
    }
    else if(!password_pattern.test(values.password)){
        errors.password = "password did not match"
    }

    return errors;
  }
  export default Validation;