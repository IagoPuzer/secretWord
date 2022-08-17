import React from 'react'
import './EndGame.css'
import {useNavigate} from 'react-router-dom'

const EndGame = () => {
    const navigate = useNavigate()

    const retryStartGame = () => {
      navigate ('/')
    }

  return (
    <div>
      <h2> Game Over!</h2>
      <button onClick={retryStartGame} >INICIAR NOVAMENTE</button>
    </div>
  )
}

export default EndGame