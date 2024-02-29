import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalculatorContainer from './CalculatorContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalculatorContainer />
    </>
  )
}

export default App
