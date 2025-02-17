import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')
  const changeColor = (color) => {
    setColor(color)
  }
  return (
    <div className='h-screen w-full text-center align-middle' style={{backgroundColor: color}}>
      <div className="fixed flex justify-center bottom-1 ml-auto mr-auto font-bold underline text-white w-full bg-amber-700 p-5 rounded-lg align-middle gap-1 mx-2">
        <button className='m-0.5 py-3.5 px-7 rounded-3xl text-black no-underline' style={{backgroundColor: 'blue'}} onClick={()=>setColor('blue')} >blue</button>
        <button className='m-0.5 py-3.5 px-7 rounded-3xl text-black no-underline' style={{backgroundColor: 'red'}} onClick={()=>setColor('red')} >red</button>
        <button className='m-0.5 py-3.5 px-7 rounded-3xl text-black no-underline' style={{backgroundColor: 'yellow'}} onClick={()=>setColor('yellow')} >yellow</button>
        <button className='m-0.5 py-3.5 px-7 rounded-3xl text-black no-underline' style={{backgroundColor: 'green'}} onClick={()=>setColor('green')} >green</button>
        <button className='m-0.5 py-3.5 px-7 rounded-3xl text-black no-underline' style={{backgroundColor: 'white'}} onClick={()=>setColor('white')} >white</button>
      </div>
    </div>
  )
}

export default App
