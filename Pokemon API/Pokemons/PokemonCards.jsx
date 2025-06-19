import React from 'react'
import './pokemonCard.css'

function PokemonCards({pokemons}) {
    
    return (
    <div className='container'>
        {pokemons.map((items)=>{
            return (
                <div key={items.id} className='cards'>
                    <img src={items.sprites.other.dream_world.front_default} className='img'></img>
                    <h3>{items.name.toUpperCase()}</h3>
                    <div className='highlight' >
                        <p>
                            {items.types.map((types)=>types.type.name).join(', ')}
                        </p>
                    </div>
                    <div className="three-details">
                        <p><highlight>Height : </highlight>{items.height}</p>
                        <p><highlight>Weight : </highlight>{items.weight}</p>
                        <p><highlight>Speed : </highlight>{items.stats[5].base_stat}</p>
                    </div>
                    <div className="two-details">
                        <p><highlight>Attack : </highlight>{items.stats[1].base_stat}</p>
                        <p><highlight>Defense : </highlight>{items.stats[2].base_stat}</p>
                    </div>
                </div>
            )
        })}      
    </div>
  )
}

export default PokemonCards
