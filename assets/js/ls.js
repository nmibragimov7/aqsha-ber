



const lsStorage = (key)=>{

  return {
    get(){
      const data = localStorage.getItem(key) || 'null'
      return JSON.parse(data)
    },
    save(data){
      localStorage.setItem(key,JSON.stringify(data))
    },
    delete(){
      localStorage.removeItem(key)
    }
  }
}

export const tokenLs = lsStorage("token")
