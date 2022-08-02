

let URL = "http://192.168.240.1:8080"


describe('Pokedex', () => {
  let fetchPolyfill;

  before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';

    cy.request(polyfillUrl)
      .then((response) => {
        fetchPolyfill = response.body;
      });

    cy.server();
    cy.route('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', 'fixture:listadoPagina-1')
      .as('obtenerPrimeraPagina');

    cy.visit(URL, {
      onBeforeLoad(contentWindow) {
        // eslint-disable-next-line no-param-reassign
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill);
        // eslint-disable-next-line no-param-reassign
        contentWindow.fetch = contentWindow.unfetch;
      },
    });
  });

it('entra a la primer pagina', ()=>{
  const totalPokemones = 1154
  const cant_paginas = 58
  const cant_pokemones_por_pag = 20

  cy.get('#cantPokemones').should('have.text', totalPokemones.toString())
  .as('obtener cant total pokemones')

  cy.get('#paginador').get('.page-item:nth(0)').should('have.class', 'disabled')
  .as('"Anterior" deshabilitado')

  cy.get('#paginador').get('.page-item:last').should('not.have.class', 'enabled')
  .as('"Siguiente" habilitado')
  
  cy.get('.page-link').should('have.length', cant_paginas +2)//la ant y la sig
  .as('cant de elementos del paginador')

  cy.get('#indice .list-group-item').should('have.length', cant_pokemones_por_pag)
  .as('20 pokemones por pag')
})

it('usa el paginador', () =>{
  cy.server()
  cy.route('https://pokeapi.co/api/v2/pokemon?limit=0&offset=20', 'fixture:listadoPagina-1')
  .as('Obtener 1er pagina')

  cy.route('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20', 'fixture:listadoPagina-2')
  .as('Obtener 2da pagina')

  cy.route('https://pokeapi.co/api/v2/pokemon?limit=1160&offset=20', 'fixture:listadoPagina-ultima-58')
  .as('Obtener 58va pagina, ultima')

  cy.get('#paginador .page-link:first')
  .parent()
  .as('paginaAnterior')
  .should('have.class', 'disabled')
  

  cy.get('#paginador .page-link:last')
  .parent()
  .as('paginaSiguiente')
  .should('not.have.class', 'disabled')

  cy.get('@paginaSiguiente').click()
  
  cy.get('@paginaAnterior').should('not.have.class', 'disabled')
  
  cy.get('@paginaSiguiente').should('not.have.class', 'disabled')

  cy.get('@paginaAnterior').click()

  cy.get('@paginaAnterior').should('have.class', 'disabled')

  cy.get('#paginador .page-link')
  .eq(-2) //segundo elemento contando de atras (empezando en 1)
  .click()

  cy.get('@paginaSiguiente').should('have.class', 'disabled')

  cy.get('#paginador .page-link').eq(1).click()
})

  it('carga un pokemon al clickear su nombre', ()=>{
    const cantidad_movimientos = 83
    const cantidad_tipos = 2
    
    cy.server()
    cy.route('https://pokeapi.co/api/v2/pokemon/bulbasaur', 'fixture:bulbasaur')
    .as('obtenerBulbasaur')

    cy.get('#ayudaUsuario').as('ayuda').should('have.text', 'Select a pokemon for more info')

    cy.get('#contenedor-pokemon').should('not.be.visible')

    cy.get('#indice .list-group-item:first').click()

    cy.get('@ayuda').should('have.text', '')

    cy.get('#contenedor-pokemon')
    .as('contenedor')
    .should('be.visible')

    cy.get('#tipos-contenedor .type').should('have.length', cantidad_tipos)

    cy.get('#movimientos tr').should('have.length', cantidad_movimientos)
  })
})






