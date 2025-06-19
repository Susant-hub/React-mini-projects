import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import './pokemon.css'
import PokemonCards from './PokemonCards'

function Pokemon() {
    let api="https://pokeapi.co/api/v2/pokemon?limit=40"
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState(null)

    async function getData(){
        try {
          let response=await fetch(api)
          let data= await response.json()
          let pokemon=data.results

        let allData = await Promise.all(
            pokemon.map(async (item)=>{
            let response=await fetch(item.url)
            let data = await response.json()
            return data
        })
        )
        setPokemons(allData)
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='big-container'>
    <h1>Pokemon Cards</h1>
    <PokemonCards pokemons={pokemons}/>
    </div>
  )
}

export default Pokemon
