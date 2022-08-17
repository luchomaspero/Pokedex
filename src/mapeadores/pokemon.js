import Pokemon from '../entidades/pokemon.js'
import Movimiento from '../entidades/movimiento.js'
import ListadoPokemones from '../entidades/listadoPokemones.js'

export function mapearPokemon(datosAPI){
    const{
        id,
        name: nombre,
        sprites: {front_default: foto},
        types: tipos,
        abilities: habilidades,
        moves: movimientos,
    } = datosAPI

    return new Pokemon(
        id,
        nombre,
        foto,
        habilidades.map((item) => item.ability.name),
        tipos.map((item) => item.type.name),
        movimientos.map((item) => new Movimiento(
          item.move.name,
          item.version_group_details.map((v) => v.version_group.name),
        )),
      );
}

export function mapearListadoPokemones(datosAPI){
    const{
        count:total,
        next: siguienteURL,
        previous: anteriorURL,
        results: resultados,
    } = datosAPI

    return new ListadoPokemones(
        total,
        siguienteURL,
        anteriorURL,
        resultados.map((pokemon)=> pokemon.name)
    )
}