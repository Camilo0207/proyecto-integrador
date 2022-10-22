export function helpValidaciones() {
  const validateFormMenu=(form)=>{
    const errors = {};

    if(!form.destiny.trim()) errors.destiny= "Escoge un destino"
    if(!form.checkIn && !form.checkOut) errors.checkInOut="Escoge una fecha"

    return errors;
  }
  return {
    validateFormMenu
  };
}
