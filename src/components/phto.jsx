import { useState } from 'react'
import './phto.css'
const character = ({ character }) => {
  const [turned, setGirada] = useState(false)
  return (
    <>
      <img
        class={turned ? 'turned' : 'image'} // he tendio que mirar la solución en esta linea de código para darle la vuelta.
        src={character.image}
        alt={character.name}
        onClick={() => setGirada(!turned)}
      />
    </>
  )
}
export default character
