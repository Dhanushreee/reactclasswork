import React, { useState } from 'react'
export default function TwoData()
{
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
    return(
        <div>TwoWayBinding
            <input onChange={changeName} vakue={name}></input>
            <p>the name is {name}</p>
        </div>
    )
}
DefautlProps.defautlProps={
    name:"skct"
}