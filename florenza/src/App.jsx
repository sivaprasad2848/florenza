import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-3xl font-bold">
      🚀 Hello Vite + React + Tailwind!
    </div>
  </>
  )
}

export default App
