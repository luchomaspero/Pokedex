export default class Pokemon{
    constructor(id, nombre, foto, tipos=[], habilidades=[], movimientos=[]){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.tipos = tipos
        this.habilidades = habilidades
        this.movimientos = movimientos
    }
}