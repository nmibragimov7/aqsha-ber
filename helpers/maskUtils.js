export function cleanNumber(value,slice=true) {
  if(slice){
    return value.replace(/\D+/gi, '').slice(1)
  }else{
    return value.replace(/\D+/gi, '')
  }
}
