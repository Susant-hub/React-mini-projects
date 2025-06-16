import React, { useState } from 'react'
import {useEffect} from 'react'

function PokemonApi() {
  const[apiData, setApiData]= useState(null)

  function getData(){
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response)=>response.json())
    .then((data)=>setApiData(data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getData()
  } , [])


  if(apiData){
    console.log(apiData)
    return (
      <div>
        <h1>{apiData.name}</h1>
        <img src={apiData.sprites.front_default}></img>
        <h3>Height = {apiData.height}</h3>
        <h3>Hp = {apiData.stats[0].base_stat}</h3>
        <h3>Attack = {apiData.stats[1].base_stat}</h3>
        <h3>Defense = {apiData.stats[2].base_stat}</h3>
        <h3>Speed = {apiData.stats[5].base_stat}</h3>
      </div>
    )
  }
}

export default PokemonApi
