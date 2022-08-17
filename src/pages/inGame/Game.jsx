import {React ,useCallback, useState, useEffect } from 'react';
import './Game.css'
import { wordsList } from '../../data/words';
import {useNavigate} from 'react-router-dom';

const InGame = () => {
    const [words, setWords] = useState(wordsList)
    const navigate = useNavigate ()

    const [pickedWords, setPickedWords] = useState('')
    const [pickerCategory, setPickerCategory] = useState('')
    const [letters, setLetters] = useState([])

    const endGame = () => {
        navigate ('/endGame')
    }

    const verifyLetter = () => {

    }

  return (
    <div className='game'>
        <p className='point'>Pontuação: 000</p>
        <h1 className=''>Adivinhe a palavra</h1>
        <h3 className='tip'>Dica da palavra: Dica...</h3>

        <div className="word-container">
            <span className = 'letter'>A</span>
            <span className = 'blankSquare'></span>       
        </div>  

        <div className="letterContainer">
            <p>Tente adivinhar a letra</p>
            <form>
                <input type="text" name='letter' maxLength='1' required/>
                <button>Jogar!</button>  
            </form>    
        </div>

        <div className="wrondLettersContainers">
        <p>Letras utilizadas</p>
        <span>a,</span>
        </div>      
    </div>
  )
}

export default InGame