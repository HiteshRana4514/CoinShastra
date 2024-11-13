import { useState } from 'react'
import Header from './components/Header'
import './css/global.css'
import './css/App.css'
import './css/responsive.css'
import DarkTheme from './components/DarkTheme'
import Market from './components/Market'

function App() {

  return (
    <>
      <Header />
      <Market/>
    </>
  )
}

export default App
