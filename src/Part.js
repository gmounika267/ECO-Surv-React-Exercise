import React, { useEffect, useState } from "react";
import axios from "axios";

const Part = () =>{
    const [data,setData] = useState([])
       useEffect( () =>{
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
            console.log(res.data);
        })
    })
    return(
        <>
             
        </>
    )
}

export default Part;