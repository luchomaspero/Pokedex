export function actualizarTextoIndicePokemones(texto){
    document.querySelector('#indice').textContent = texto
}

export function mostrarListadoPokemones(nombresPokemones, pokemonSeleccionadoCallBack = () => {}){
    const $indice = document.querySelector('#indice')
    $indice.innerHTML = ''

    nombresPokemones.forEach((nombre) => {
        const $link = document.createElement('a')
        $link.className = 'list-group-item list-group-item-action'
        $link.setAttribute('href', '#')
        $link.textContent = nombre
        $link.onclick = () => pokemonSeleccionadoCallBack(nombre)
        $indice.appendChild($link)
    });
}