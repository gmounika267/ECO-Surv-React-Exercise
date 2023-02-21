import React, { useState } from 'react';
import './App.css';
import Image from './Dog1.jpeg';


function App() {
  const [data,setData]= useState("")
  const submitHandler = () =>{
    setData("Logged in Successfully!")
  }
  return(
    <>
    <body class="whole">
    <h1><i> Dog's Breed </i></h1>
<hr width="100%" />
<div class="container">
<div class="f-group">
<label for=""> Breed </label>
<select name="slct1" id="slct1">
<option value=""> -- Choose Breed -- </option>
<option value="india"> Labrador </option>
<option value="america"> Pitbull </option>
<option value="america"> BullDog </option>
<option value="america"> Husky </option>
</select>
</div>


<div class="f-group">
<label for=""> Sub-Breed </label>
<select name="slct2" id="slct2">
  <option value="america"> -- Choose Sub-breed -- </option>
  <option value="america"> Pitbull </option>
  <option value="america"> Pitbull </option>
  <option value="america"> Pitbull </option>
</select>
</div>

<div class="f-group">
<label for=""> No of Images </label>
<select name="slct2" id="slct2">
  <option value="america"> No of images </option>
  <option value="america"> 1 </option>
  <option value="america"> 2 </option>
  <option value="america"> 3 </option>
</select>
</div>

<button class="f-group"> View Images </button> <br/><br/><br/><br/><br/>



</div>

<img src={Image}  height="200px" width="250px" />
</body>
    </>
  )
}

export default App;
