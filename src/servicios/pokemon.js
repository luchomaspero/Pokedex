import {cargarPokemon as cargarPokemonDeApi, cargarPokemones as cargarPokemonesDeApi,} from '../api/pokemon.js'
import { mapearListadoPokemones, mapearPokemon } from '../mapeadores/pokemon.js'


import { 
    cargarPokemon as cargarPokemonDeLocalStorage,
    cargarPokemones as cargarPokemonesDeLocalStorage,
     guardarPokemon,
     guardarPokemones,} from '../storage/pokemon.js'


export const limite_pokemones = 20

export async function cargarPokemon(id) {
    if(id === undefined){
        throw new Error('Se necesita un identificador para cargar un pokemon')
    }
    let pokemon

    try{
        pokemon = cargarPokemonDeLocalStorage(id)
    } catch (e) {
        const pokemonData = await cargarPokemonDeApi(id)
        pokemon = mapearPokemon(pokemonData)
        guardarPokemon(id,pokemon)
    }
    return pokemon
}

export async function cargarPokemones(offset = 0, limite = limite_pokemones) {
    try{
        return cargarPokemonesDeLocalStorage(offset,limite)
    }catch (e) {
        const pokemonesData = await cargarPokemonesDeApi(offset,limite)
        const pokemones = mapearListadoPokemones(pokemonesData)
        guardarPokemones(offset,limite,pokemones)
        return pokemones
    }
    
}