
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthContextProvider } from './context/AuthContext'

function App() {

  return (
    <>
<AuthContextProvider  >

   <Navbar/>
    <main className='min-h-screen  max-w-screen-2xl mx-auto px-4 py-6 font-primary' >
    <Outlet/>
    </main>

    <Footer/>

</AuthContextProvider>
    </>
  )
}

export default App
