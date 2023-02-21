import React, { useEffect, useState } from "react";
import axios from "axios";

const Part = () =>{
    const [data,setData] = useState([])
       useEffect( () =>{
        axios.get('https://dog.ceo/dog-api/breeds-list')
        .then((res) => {
            console.log(res.data);
        })
    })
    return(
        <>
          kmlkm;lm;
        </>

    )
}