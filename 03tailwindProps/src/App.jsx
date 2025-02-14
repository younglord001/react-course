import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let testData = {name:"Ritesh",age:25};
  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>test tailwind</h1>
      <Card username="Ritesh Mehrotra" btntext="learn About" rmdata={testData}/>
      <Card  username="react learning" ></Card>
      

    </>
  )
}

export default App
