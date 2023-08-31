import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './components/ui/Menu'
import Footer from './components/ui/Footer'
import Inicio from './components/views/Inicio'


function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Menu></Menu>
  <Inicio></Inicio>
  <Footer></Footer>
  </BrowserRouter>
  )
}

export default App
