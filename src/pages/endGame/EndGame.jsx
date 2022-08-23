import { React, useState, useEffect } from 'react'
import './EndGame.css'
import { useLocation, useNavigate } from 'react-router-dom'


const EndGame = () => {
  const navigate = useNavigate()
  const [score, setScore] = useState(null)
  const [word, setWord] = useState(null)
  const { state } = useLocation()

  useEffect(() => {
    if (state?.scoreFinal && state.wordFinal) {
      setScore(state.scoreFinal)
      setWord(state.wordFinal)
    }
  }, [state])

  const retryStartGame = () => {
    navigate('/')
  }


  return (
    <div>
      <h2> Game Over!</h2>
      <h2>Você fez: {score} pontos!!</h2>
      <h2>A palavra era: {word}</h2>
      <button onClick={retryStartGame} >INICIAR NOVAMENTE</button>
    </div>
  )
}

export default EndGame