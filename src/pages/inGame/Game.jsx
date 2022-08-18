import {React ,useCallback, useState, useEffect, useRef } from 'react';
import './Game.css'
import { wordsList } from '../../data/words';
import {useNavigate} from 'react-router-dom';



const InGame = () => {
    const navigate = useNavigate ()

    const [words, setWords] = useState(wordsList)
    const [pickedWords, setPickedWords] = useState('')
    const [pickedCategory, setPickedCategory] = useState('')
    const [letters, setLetters] = useState([])

    const [guessedLetters, setGuessedLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [guesses, setGuesses] = useState(5)
    const [score, setScore] = useState(0)

    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)

    const pickWordAndCategory = () => {
        //selecionando uma categoria aletória
        const categories = Object.keys(words)
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
      
        //selecionando uma palavra aletória dentro da categoria
        const word = words[category][Math.floor(Math.random() * words[category].length)]
        
        return {word, category}
      }

      //iniciar o game quando a pagina renderizar
      useEffect (() => {
          
        //selecionando a categoria e a palavra para inicar o jogo
        const{word, category} = pickWordAndCategory()
        
        console.log (word, category)

        //separando a palavra por letras
        let wordLetters = word.split('')
        wordLetters = wordLetters.map((l) => l.toLowerCase())
        console.log(wordLetters)

        // fill states palavra
        setPickedWords(word)
        setPickedCategory(category)
        setLetters(wordLetters)
        console.log ('entrou')
      },[])

      

    const verifyLetter = (letter) => {
        console.log (letter)
    }

    //envio do formulario ao selecionar escolher a letra para jogar
    const handleSubmit = (e) => {
        e.preventDefault()
        verifyLetter(letter)

        setLetter('')

        letterInputRef.current.focus()
    }

  return (
    <div className='game'>
        <p className='points'>Pontuação: {score}</p>
        <h1>Adivinhe a palavra</h1>
        <h3 className='tip'>Dica da palavra: <span>{pickedCategory}</span> </h3>
        <p>Você ainda tem {guesses} tentativas</p>

        <div className="wordContainer">
             {letters.map((letter,i)=>(
                guessedLetters.includes(letter) ? 
                    (<span key = {i} className = 'letter'>{letter}</span>)
                 : (<span key = {i} className = 'blankSquare'></span>)
             ))}    
        </div>  

        <div className="letterContainer">
            <p>Tente adivinhar a letra</p>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 name='letter' 
                 maxLength='1' 
                 required 
                 ref = {letterInputRef} 
                 value = {letter} 
                 onChange={e => setLetter(e.target.value)}/>
                <button type='submit'>Jogar!</button>  
            </form>    
        </div>

        <div className="wordLettersContainers">
        <p>Letras utilizadas:</p>
        {wrongLetters.map((letter, i)=>(
            <span key = {i}>{letter},</span>
        ))}
        </div>      
    </div>
  )
}

export default InGame