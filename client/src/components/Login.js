import './Login.css'
import { Header } from './Header'
import { isLoggedin, user } from '../states/GlobalState'
import { useState } from "@hookstate/core";
import { Navigate } from "react-router-dom";
import { useEffect } from 'react';

export let Login = () => {

 let isLog = useState(isLoggedin), username = useState(user)

 let setLog = () => {
  isLog.set(true)
  username.set(document.getElementById('username').value)
 }

 return ( 
 <>
  <Header />
  {
  isLog.get() ?
  <Navigate to="/Data" />
  : <div id="LoginContainer">
   <form id="FormDiv" onSubmit={setLog}>
        <label htmlFor="username"></label>
        <input type="text" id="username" placeholder="Username" required/>
        <label htmlFor="password"></label>
        <input type="password" id="password" placeholder="Password" required/>
        <button id="login" type="submit">LOGIN</button>
   </form>
  </div>
 }
</>
)
}