import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { adding, decrement, increment } from './redux/counterSlice'

function App() {
  const [count, setCount] = useState(0)
const dispatch=useDispatch()
const counter=useSelector((state)=>state.counter.value)
// const coloring=useSelector((state)=>state.colors.value)
  return (
    <>
     <button onClick={()=>dispatch(increment())}>increment</button>
     <button onClick={()=>dispatch(decrement())}>decrement</button>
     <button onClick={()=>dispatch(adding(5))}>adding</button>
     <p>{counter}</p>
    </>
  )
}

export default App
