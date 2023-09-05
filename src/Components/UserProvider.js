import React,{useState,useEffect,createContext} from 'react'
import SpinnerLoad from './SpinnerLoad'

export const UserContext = createContext()
function UserProvider({children}) {
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState([true])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            setUsers(data);
            setLoading(false)
        })
        .catch(error => console.log(error))
    },[])

  return (
    <UserContext.Provider value={users}>
        {loading ? <SpinnerLoad/>:children}
    </UserContext.Provider>
  )
}

export default UserProvider