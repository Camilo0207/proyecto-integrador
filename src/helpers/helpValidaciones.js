export function helpValidaciones() {
  const validateFormMenu=(form)=>{
    const errors = {};

    if(!form.destiny.trim()) errors.destiny= "Escoge un destino"
    if(!form.checkIn && !form.checkOut) errors.checkInOut="Escoge una fecha"

    return errors;
  }

  const validateFormLogin=(form,db)=>{
    const errorsValidation={}

    if(!form.email.trim()) errorsValidation.email= "Este campo es obligatorio"
    if (!form.password)errorsValidation.password = "Este campo es obligatorio";

    const userFound = db.find((el) => el.email === form.email);
    if (form.email) {
      if (!userFound) errorsValidation.email = "Usuario no existe";
      if (userFound && userFound.password !== form.password)
        errorsValidation.password = "Contraseña incorrecta";
    }
    return {errorsValidation,userFound}
  }

  const validateNewUser=(form,db)=>{
    const errors={}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name.trim()) {
      errors.name = "Este campo es obligatorio";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Solo acepta letras y espacios en blanco ";
    }
    if (!form.lastname.trim()) {
      errors.lastname = "Este campo es obligatorio";
    } else if (!regexName.test(form.lastname.trim())) {
      errors.lastname =
        "Solo acepta letras y espacios en blanco ";
    }

    const emailFound = db.find((el) => el.email === form.email);

    if (!form.email.trim()) {
      errors.email = "Este campo es obligatorio";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `Correo invalido. Ej:'ejemplo@gmail.com'`;
    } else if (emailFound) {
      errors.email = `Correo ya esta registrado`;
    }

    if (!form.password.trim()) {
      errors.password = "Este campo es obligatorio";
    }
    if (!form.confirmPassword.trim()) {
      errors.confirmPassword = "Este campo es obligatorio";
    }

    if(form.password && form.confirmPassword && form.password !== form.confirmPassword){
      errors.password= "La contraseña no coincide"
      errors.confirmPassword="La contraseña no coincide"
    }
    
    return errors;
  }
  return {
    validateFormMenu,
    validateFormLogin,
    validateNewUser
  };
}
