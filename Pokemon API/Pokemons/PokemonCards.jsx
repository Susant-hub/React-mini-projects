import React from 'react'
import './pokemonCard.css'

function PokemonCards({pokemons}) {

    //to play the audio of pokemons
    function handleCry(url){
        const audio = new Audio(url)
        audio.play()
    }

  return (
    <div className='container'>
        {pokemons.map((items)=>{
            return (
                <div key={items.id} className='cards' onClick={()=>handleCry(items.cries.latest)}>
                    <img src={items.sprites.other.dream_world.front_default} className='img'></img>
                    <h3>{items.name.toUpperCase()}</h3>
                    <div className='highlight' >
                        <p>
                            {items.types.map((types)=>types.type.name).join(', ')}
                        </p>
                    </div>
                    <div className="three-details">
                        <p><span>Height : </span>{items.height}</p>
                        <p><span>Weight : </span>{items.weight}</p>
                        <p><span>Speed : </span>{items.stats[5].base_stat}</p>
                    </div>
                    <div className="two-details">
                        <p><span>Attack : </span>{items.stats[1].base_stat}</p>
                        <p><span>Defense : </span>{items.stats[2].base_stat}</p>
                    </div>
                </div>
            )
        })}      
    </div>
  )
}

export default PokemonCards
