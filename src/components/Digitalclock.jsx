import React from 'react'
import { useState,useEffect } from 'react'

const Digitalclock = () => {
  //use state for storing current type
  const[time,setTime]=useState(new Date())
  console.log(time)
  //use effect for handling the time


  useEffect(()=>{
    let intervalID=setInterval(() => {
      setTime(new Date()) //updating the time after 1 second
    }, 1000);

    return ()=>{
      clearInterval(intervalID)
    } //cleanup function
   


  },[])//dependency
  //formatting the time

  function formatTime(){
    let hours=time.getHours()
    let min=time.getMinutes()
    let seconds=time.getSeconds()
    let AmPm=(hours>=12)?"PM":"AM"

    hours=hours%12 || 12
    // console.log(hours,min,seconds)
    return `${Addzero(hours)}:${Addzero(min)}:${Addzero(seconds)} ${AmPm}`
  }

 function Addzero(a){
 return(a<10?"0":"")+a
 }
 const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: 'url("https://wallpaperaccess.com/full/2744315.jpg")', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  color: 'white',
}

const clockStyle = {
  position:"relative",
  top:"8%",
  padding: '10px ',
  borderRadius: '12px',
  // backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  backdropFilter: 'blur(10px)',
  textAlign: 'center',
  fontSize: '4em',
  fontFamily: 'Times New Roman, serif',
  color: 'yellow', 
  // boxShadow: '0 4px 15px rgba(0, 0, 0, 0)',
  border: '3px solid black', 
  animation: 'pulse 1.5s infinite',
}

const timeStyle = {
  color: '',
}

  return (
    <div style={containerStyle}>
      <div style={clockStyle}>
        <h1 style={timeStyle}>{formatTime()}</h1>
      </div>
    </div>
  )
}

export default Digitalclock
