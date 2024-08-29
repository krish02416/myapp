import React from 'react'
import UseFetch from './UseFetch'

export const CallUrl = () => {

    const data=UseFetch("https://jsonplaceholder.typicode.com/Users")
    const data2=UseFetch("https://jsonplaceholder.typicode.com/Todos")
  return (
    <div>
        <h1>Users</h1>
             {data.map((res)=>{
            return <p key={res.id}>{res.id}.{res.name} email:{res.email}</p>
        })}

     <h1>TODOs</h1>
        {data2.map((res)=>{
            return <p key={res.id}>{res.userId}.{res.title}</p>
        })}
    </div>
  )
}
