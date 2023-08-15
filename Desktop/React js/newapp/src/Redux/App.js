import React from 'react'
import { decrementFunction, incrementFunction } from './countReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function App() {
  const values =useSelector((state)=>state)
  const dispatch=useDispatch()
  return (
    <div>
      <div>
        <h1>{values.countReducer.count}</h1>
        <button
        onClick={()=>{
          dispatch(incrementFunction())
        }}
        >
        +
        </button>

      </div>

      <div>
       
        <button
        onClick={()=>{
          dispatch(decrementFunction())
        }}
        >
        -
        </button>
        
      </div>
      
    </div>
  )
}

export default App
