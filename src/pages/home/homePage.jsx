import {React ,useCallback, useState, useEffect } from 'react';
import './homePage.css'
import { useNavigate } from 'react-router-dom';
import { wordsList } from '../../data/words';

const Home = () => {
  const navigate = useNavigate()
  const [words, setWords] = useState(wordsList)

  const [pickedWords, setPickedWords] = useState('')
  const [pickerCategory, setPickerCategory] = useState('')
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    //selecionando uma categoria aletória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
  

    //selecionando uma palavra aletória dentro da categoria
    const word = words[category][Math.floor(Math.random() *  words[category].length)]
    

    return {word, category}
  }

  const handleStartGame = () => {
    //navegando para a page game
    navigate('/inGame')

    //selecionando a categoria e a palavra para inicar o jogo
    const{word, category} = pickWordAndCategory()
    console.log (word, category)

    //separando a palavra por letras
      let wordLtters = word.split('')
      wordLtters = wordLtters.map((l) => l.toLowerCase())
      console.log (wordLtters)

    //fill states palavra
    setPickedWords(word)
    setPickerCategory(category)
    setLetters(letters)
  }


  return (
    <div className="start-screen">
        <h1>Secret Word</h1>
        <button onClick={handleStartGame}>START</button>
    </div>
  )
}

export default Home