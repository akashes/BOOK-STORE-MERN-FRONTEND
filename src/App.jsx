import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>navbar</nav>

    <main className='min-h-screen  max-w-screen-2xl mx-auto px-4 py-6' >
    <Outlet/>
    </main>

    <footer>footer</footer>
    </>
  )
}

export default App
