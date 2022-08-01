export const limite_pokemones = 20

function obtenerKeyPokemon(id){
    return `pokemon_${id}`
}


function obtenerKeyPokemones(offset,limite){
    return `pokemon_${offset}_${limite}`
}

export function cargarPokemon(id){
    if(id === undefined){
        throw new Error('Se necesita un identificador para cargar un pokemon')
    }

    const pokemon = JSON.parse(localStorage.getItem(obtenerKeyPokemon(id)))
    if (pokemon === null){
        throw new Error(`Pokemon con id ${id} no encontrado`)
    }
    return pokemon
}

export function cargarPokemones(offset = 0, limite = limite_pokemones){
    const pokemones = JSON.parse(localStorage.getItem(obtenerKeyPokemones(offset,limite)))
    if(pokemones ===null){
        throw new Error(`Listado de pokemones con offset ${offset} y limite ${limite} no encontrado`)
    }
    return pokemones
}

export function guardarPokemon(id, pokemon){
    if(id === undefined || typeof pokemon !== 'object'){
        throw new Error('Se necesita un identificador y un pokemon para guardar en localStorage')
    }
    localStorage.setItem(obtenerKeyPokemon(id), JSON.stringify(pokemon))
}

export function guardarPokemones(offset,limite, pokemones){
    if(offset === undefined || typeof limite === undefined || typeof pokemones !== 'object'){
        throw new Error('Se necesita offset, limite y pokemones')
    }
    localStorage.setItem(obtenerKeyPokemones(offset,limite), JSON.stringify(pokemones))
}