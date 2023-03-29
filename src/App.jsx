import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Shops from './component/Shops/Shops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
    <Shops></Shops>
    </div>
  )
}

export default App
