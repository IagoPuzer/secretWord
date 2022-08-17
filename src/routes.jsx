import React from 'react'
import Home from './pages/home/homePage'
import InGame from './pages/inGame/Game'
import EndGame from './pages/endGame/EndGame'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/inGame' element = {<InGame/>} />
        <Route path = '/endGame' element = {<EndGame/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default Router