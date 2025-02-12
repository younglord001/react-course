import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () => {
    if (counter <20 ) {
      console.log('add value', counter);
      return setCounter(counter + 1)
    }
    
  }
  const removeValue = () => {
    if (counter > 0) {
      console.log('remove value', counter);
      return setCounter(counter - 1)
    }
    
  }
  return (
    <>
      <h1 className="rm-test" >chai or react</h1>
      <p>counter value: {counter}</p>
      <button onClick={addValue} >add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
