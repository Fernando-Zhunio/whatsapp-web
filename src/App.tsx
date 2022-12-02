import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSocket } from './class/init'
import AppRouter from './routes/App.routing'

function App() {
  return (
    <AppRouter></AppRouter>
  )
}

export default App
