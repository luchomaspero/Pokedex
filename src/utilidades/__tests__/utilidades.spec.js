/// <reference types="Jest" />

import obtenerParametrosDeURL from '../utilidades.js'

test('deberia obtener los parametros de la url', ()=>{
    expect(obtenerParametrosDeURL('http://asd.com?offset=1&limit=1')).toEqual({
        offset: '1',
        limit: '1',
    })
})

test('deberia obtener los parametros por default de la url', ()=>{
    expect(obtenerParametrosDeURL('http://asd.com/')).toEqual({
        offset: undefined,
        limit: undefined,
    })
}) 