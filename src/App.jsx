import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter]=useState(10)
// let counter=5;
const addValue=()=>{
  if(counter<20){
    counter+=1

  }  
  setCounter(counter)
  // console.log(counter);
}

const removeValue=()=>{
  
  if(counter>0){
    counter-=1; 
  }
setCounter(counter)
}

  return (
    <>
     <h1>React code</h1>
     <h2>Counter Value:{counter}</h2>

     <button className='btn' onClick={addValue}>Add value {counter}</button>
     <br />
     <button  className='btn' onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
 