import { actualizarTextoAyuda, mostrarTotalPokemones } from "../general.js";

test('actualiza el texto ayuda', () => {
    document.body.innerHTML = '<div id="ayuda"></div>' //simulo un html con un unico elemento, el de ayuda, asi lo testeo
    actualizarTextoAyuda('test') //le edito el texto para que diga ayuda (lo va a hacer si funciona bien mi funcion a testear)
    expect(document.querySelector('#ayuda').textContent)
    .toEqual('test')
})

test('actualiza el total de pokemones', () => {
    document.querySelector.innerHTML = '<div id="total-pokemones"></div>'
    mostrarTotalPokemones(200)
    expect(document.querySelector(('#total-pokemones')).textContent)
    .toEqual('200')
})