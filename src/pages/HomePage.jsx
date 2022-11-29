import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner';
import { getPokemons } from '../store/slices/pokemon/thunks'

const HomePage = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  const handleClick = () => {
    dispatch(getPokemons(page))
  }
  return (
    <>
      <h1>PokeApi RTK</h1>
      <hr />
      <h3>{isLoading ? <Spinner /> : ""}</h3>
      <ul>
        {pokemons.map((pokemon,index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={handleClick}>Siguiente</button>
    </>

  )
}

export default HomePage