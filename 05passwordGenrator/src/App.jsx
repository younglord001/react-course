import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

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
            readOnly
          />
          <button
            className='bg-blue-500 text-white p-2'
            onClick={passwordGenerator}>
              Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range" name="" id="" />
          </div>
          <label className='text-white'>Length</label>
          
        </div>
      </div>
    </>
  )

}

export default App
