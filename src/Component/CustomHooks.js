import React, { useEffect, useState } from 'react'

function CustomHooks() {
    const[response,setResponse]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/Users")
        .then((res)=>res.json())//converting into json object
        .then((val)=>setResponse(val)) //set the response in the response[]
    },[])
  return (
    <div>
        {response.map((res)=>{
            return <p key={res.id}>{res.id}.{res.name} email:{res.email}</p>
        })}
    </div>
  )
}

export default CustomHooks