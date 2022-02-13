import { useState} from 'react'

import axios from 'axios'

import './PokeCard.css'

import Button from '../Button-Pokeball/Button'

import pokeBall from '../Button-Pokeball/pokeball.png'

const PokeCard = () => {

    const [pokemon, setPokemon] = useState({
        id: 25,
        name:'PIKACHU',
        hp: 50,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        atk: 55,
        def:40,
        type: 'electric',
        weight: 6
    })
        
    

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    let randomNumber = getRandomNumber(1,151)

    const getPokemon = async (id) => {

        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)

            const pokemon = {
                id: res.data.id ,
                name: res.data.name.toUpperCase(),
                img: res.data.sprites.front_default,
                hp: res.data.stats[0].base_stat,
                atk: res.data.stats[1].base_stat,
                def: res.data.stats[2].base_stat,
                type: res.data.types[0].type.name,
                weight: (res.data.weight/10).toFixed(1)
            }

            setPokemon(pokemon)

        } catch (error) {
            alert(`ERROR: ${error}`)
        }
        
    }

    return (
        <div className='card'>

            <h1 className='card_title'>
                Get a random Pokemon
                <span>
                    <img className='pokeball' src={pokeBall} alt="pokebalñ" />
                </span>
                
            </h1>

            <div className='picture'>

                <div className='pokemon'>
                    <div className='image-background'>
                            <img className='pokemon_img' 
                                src={pokemon.img} 
                                alt='pokemonImg'
                            />
                    </div>
                </div>

                <div className='stats'>
                    <h2 className='pokemon_name'>
                        <span className='pokemon_id'>
                            {pokemon.id}
                        </span>- {pokemon.name}
                    </h2>

                    <h3 className='pokemon_hp'>{pokemon.hp} HP</h3>

                    <p className='pokemon_stats'>ATK: {pokemon.atk} - DEF: {pokemon.def}</p>

                    <p className='pokemon_type'>Type: {pokemon.type}</p>

                    <p className='pokemon_weight'>{pokemon.weight} kg</p>

                </div>

   
            </div>

            <Button className='pokeball_btn' onPress={()=> getPokemon(randomNumber)}/>

            
        </div>
    )
}

export default PokeCard
