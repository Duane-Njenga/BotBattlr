import { useState, useEffect, use } from 'react'
import './App.css'
import BotCollection from './Components/BotCollection'

function App() {
  const [bots, setBots] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then(res => res.json())
    .then(data => setBots(data))
  },[])


  return (
    <>
    <h1>BotBattlr</h1>
    <BotCollection bots = {bots}/>
    </>
  )
}

export default App
