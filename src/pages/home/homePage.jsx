import { React } from 'react';
import './homePage.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const handleStartGame = () => {
    //navegando para a page game
    navigate('/inGame')
  }


  return (
    <div className="start-screen">
      <h1>Secret Word</h1>
      <button onClick={handleStartGame}>START</button>
    </div>
  )
}

export default Home