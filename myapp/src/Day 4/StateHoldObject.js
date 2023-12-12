import React, { useState } from 'react'
export default function StateHoldObject()
{
    const[college,setCollege]=useState({cid:1,cname:"SKCT",year:2023})
    return(
    <div>
        <h1>College ID is {college.cid}</h1>
        <h1>college name is {college.cname}</h1>
        <h1>Year {college.year}</h1>
    </div>
    )
}