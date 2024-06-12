import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/phto' // Importar correctamente el componente

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((res) => res.json())
      .then((res) => setCharacters(res.items)) // res.results guarda el array de personajes en formato JSON
  }, [])

  return (
    <>
      {characters.map((character) => (
        <Character key={character.id} character={character} /> // Usar el componente Character correctamente
      ))}
    </>
  )
}

export default App
