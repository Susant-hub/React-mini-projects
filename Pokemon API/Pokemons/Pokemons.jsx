import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import './pokemon.css'

function Pokemon() {
    let api="https://pokeapi.co/api/v2/pokemon?limit=30"
    const [pokemons, setPokemons] = useState([])

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
        console.log(names)
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='container'>

      {pokemons.map((items)=>{return (
        <>
        <div className='cards' key={items.id} >
        <img src={items.sprites.other.dream_world.front_default} className="img"></img>
        <h3>{items.name}</h3>
        </div>
        </>)
      })}

    </div>
  )
}

export default Pokemon
