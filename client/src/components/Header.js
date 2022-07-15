import './Header.css'
import { isLoggedin, user } from '../states/GlobalState'
import { useState } from "@hookstate/core";
import axios from 'axios';
import { picture } from '../states/GlobalState';
import { useEffect } from 'react';

export let Header = () => {

 let isLog = useState(isLoggedin), username = useState(user), playerPic = useState(picture)

 let logout = () => {
  isLog.set(false)
  username.set(null)
 }

 let setPic = async() => {
  let url = 'https://randomuser.me/api/?results=1'
  let data = (await axios.get(url)).data.results;
  playerPic.set([...data])
 }

 useEffect(() => {
  setPic()
 },[])

 return ( 
  <>
  <div id="HeaderBar">
   {
   isLog.get() ?
   <>
   <div className="liner">
   <img src={playerPic.get()[0].picture.thumbnail} id='playerImg'></img>
   <div className='loggedintext'>You are logged in as: <b>{username.get()}</b></div>
   <button id='logoutbutton' onClick={logout}>LOGOUT</button>
   </div>
   </>
   : <>
   <div className="liner">
    <div className='loggedintext'> You are not logged in </div>
   </div>
   </>
   }
  </div>
  </>
 )
}