export default `<div class="container"><h1>Pokedex</h1></div>
<div class="container">
    <div class="row">
        <p> There is a total of <strong id="cantPokemones">Cargando...</strong> pokemons in the Pokedex. Take a look! </p>
    </div>
    <div class="row">
        <nav aria-label="Page navigation example">
            <ul class="pagination flex-wrap" id="paginador">
              <!-- paginador vacio -->
            </ul>
          </nav>
    </div>
    <div class="row">
        <div class="col-3">
            <div class="list-group" id="indice"> <!-- Lista de grupos de bootstrap -->
                Cargando...
                <!--  -->
            </div>
        </div>
        <div class="col" id="pokemon">

            
            <p id="ayudaUsuario">Select a pokemon for more info</p>

            <div class="card" id="contenedor-pokemon">  <!-- Aca empiezo a poner la data del pokemon -->
                
                <div class="card-body">
                    <h5 class="card-title"><strong id="nombre-pokemon">...</strong> (<strong id="id-pokemon">...</strong>)</h5>
                    
                    <img class="card-img" id="imagen-pokemon" src="" alt="Imagen del pokemon"> <!--imagen pokemon-->
                
                    <div id="tipos-contenedor">
                        <strong>Types</strong>
                        <div id="tipos">
                            
                        </div>
                    </div>
                    <div id="habilidades-contenedor">
                        <strong>Abilities</strong>
                        <div id="habilidades">
                            ...
                        </div>
                    </div>
                    <div id="movimientos-contenedor">
                        <strong>Moves</strong>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Moves</th>
                                    <th scope="col">Versions</th>
                                </tr>
                            </thead>
                            <tbody id="movimientos">
                                <!--  -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="node_modules\jquery\dist\jquery.min.js"></script>
<script type="module" src="./src/index.js"></script>`