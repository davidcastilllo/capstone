import { isLoggedin, pData } from "../states/GlobalState"
import { Header } from "./Header"
import { Navigate } from "react-router-dom";
import { useState } from "@hookstate/core";
import './Data.css'
import { useEffect } from "react";
import axios from 'axios'

/*----------------------------------------------------------------------------------------------*/

export let Data = () => {

 let isLog = useState(isLoggedin), playerData = useState(pData)
 
 let dataLoad = async () => {
   let url = 'http://136.49.77.248/exDBcapstone/Parks';   
   let data = (await axios.get(url)).data;
   let newData = JSON.parse(JSON.stringify(data))
   playerData.set([...newData])
 }

 useEffect(() => {
  dataLoad()
 },[])

 return (
  <>
  <Header />
  {
   isLog.get() ?
   <>
   <div id="DataContainer">
    <section id="Title">
    <h2>Heres a list of Parks in the Austin area!</h2>
    </section>
   <div id="ParkList">
     {playerData.get() ? 
     playerData.get().map((park,ix) => {
      return (
       <>
        <div key={ix} className="ParkCard">
          <span><b>Name:</b> {park.name}</span>
          <span><b>Address:</b> {park.address}</span>
          <span><b>Hours:</b> {park.hours}</span>
          <span><b>Description:</b> {park.description}</span>
        </div>
       </>
      )
     })
    :null
    }
   </div>
   </div>
   </>
   : <Navigate to="/" />
  }
  </>
 )
}