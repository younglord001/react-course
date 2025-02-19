import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');


  // useCallback is responsible for memoizing or caching the function.
  const passwordGenerator = useCallback(() => {
      let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let password = '';
      if (numberAllowed) {
        charset += '0123456789';
      }
      if (characterAllowed) {
        charset += '!@#$%^&*()_+';
      }
      for (let i = 1; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length + 1));
      }
      setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);


  // useEffect is responsible for rerender the component when the state changes
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);
  
  // useRef is responsible for storing the previous state
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    // passwordRef.current?.clipboard.writeText(password)
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className=' text-xl text-center text-white'>Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-4">
          <input 
            type="text"
            value={password}
            className='outline-none w-full px-3 py-1 bg-white'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button
            className='bg-blue-500 text-white p-2'
            onClick={copyPasswordToClipboard}>
              Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input 
              type="range" 
              min={8}
              max={100} 
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
            />
            <label className='text-white'>Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)} // toggle via event checked or not
            />
            <label className='text-white'>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              checked={characterAllowed}
              onChange={() => setCharacterAllowed( (prev)=>!prev )} // toggle via previous state so there are 2 diffrent way to toggle show in the code 
            />
            <label className='text-white'>Spical Character</label>
          </div>
        </div>
      </div>
    </>
  )

}

export default App
