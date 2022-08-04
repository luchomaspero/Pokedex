import inicializar from '../pokedex.js';
import fixture from './pokedex.fixture.js';
import listadoFixture from '../../cypress/fixtures/listadoPagina-1.json';


test('inicializa pokedex', () => {
  document.body.innerHTML = fixture;
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(listadoFixture);
      });
      resolve({ json: () => jsonPromise });
    }));

  inicializar()
    .then(() => {
      expect(document.querySelector('#ayuda').textContent)
        .toContain('Select a pokemon for more info');

      expect(document.querySelector('#total-pokemones').textContent)
        .toContain('1154');

      expect(document.querySelectorAll('#indice .list-group-item'))
        .toHaveLength(20);
    });
});