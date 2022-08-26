import { useEffect, useState } from 'react'
import { getAllCharacters } from 'services/Characters'

const CharactersView = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCharacters()
      setCharacters(data.data.results)
    }

    getData()
  }, [])

  return (
    <div>
      <span>Characters</span>
      <ul>
        {characters.map((char, key) => (
          <li key={`char-${key}`}>{char.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CharactersView
