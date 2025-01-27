import { useState } from 'react'
import HomePage from './Pages/HomePage';
import './Styles/Components/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
