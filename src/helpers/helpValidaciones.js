export function helpValidaciones() {
  const validateFormMenu=(form)=>{
    const errors = {};

    if(!form.destiny.trim()) errors.destiny= "Escoge un destino"
    if(!form.checkIn && !form.checkOut) errors.checkInOut="Escoge una fecha"

    return errors;
  }

  const validateFormLogin=(form,db)=>{
    const errors={}

    if(!form.email.trim()) errors.email= "Este campo no debe ir vacio"
    if (!form.password)errors.password = "Este campo no debe ir vacio";

    if (form.email) {
      const user = db.find((el) => el.email === form.email);
      if (!user) errors.email = "Usuario no existe";
      if (user && user.password !== form.password)
        errors.password = "Contraseña incorrecta";
    }
    return errors
  }
  return {
    validateFormMenu,
    validateFormLogin
  };
}
