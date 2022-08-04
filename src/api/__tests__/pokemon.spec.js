import { URL_API, limite_pokemones, cargarPokemon, cargarPokemones } from "../pokemon.js";

beforeEach(()=> { //esto reemplaza los fetch para que jest los entienda
    global.fetch = jest.fn()
})

test('carga 1 pokemon', ()=>{
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
        const jsonPromise = new Promise ((r) => {
            r({})
        })
        resolve({json: ()=> jsonPromise})
    }))
    cargarPokemon('bulbasaur')
    expect(global.fetch).toHaveBeenCalledTimes(1)

    expect(global.fetch).toHaveBeenCalledWith(`${URL_API}bulbasaur`)
})

test('cargo un pokemon sin id', ()=>{
    expect(cargarPokemon())
    .rejects
    .toEqual(new Error('Se necesita un identificador para cargar un pokemon'))

    expect(global.fetch).toBeCalledTimes(0)
})

test('carga listado de pokemones con parametros default', ()=>{
    global.fetch.mockImplementationOnce(()=> new Promise((resolve) =>{
        const jsonPromise = new Promise ((r)=> {
            r({})
        })
        resolve({json: ()=> jsonPromise})
    }))
    cargarPokemones()

    expect(global.fetch).toBeCalledTimes(1)

    expect(global.fetch).toHaveBeenCalledWith(`${URL_API}?offset=0&limit=${limite_pokemones}`)
})