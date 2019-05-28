
function Pokemon(nombre)
{
    this.nombre=nombre;
    this.ataque=25;
    this.vida=200;

    this.atacar=function(Pokemonobjetivo)
        {
            if (Pokemonobjetivo.vida<=0)
            {
                alert("El Pokemon "+Pokemonobjetivo.nombre+" ya murio");
            }
            else{
                Pokemonobjetivo.vida-=50;
                this.vida+=50;
                this.mostrarInfo(Pokemonobjetivo);
                alert("Si desea seguir atacando al pokemon "+Pokemonobjetivo.nombre+" click en aceptar\n"+"\t\t\tLa vida del pokemon "+Pokemonobjetivo.nombre+" es: "+Pokemonobjetivo.vida)
            }
        }
        this.mostrarInfo=function(Pokemonobjetivo)
        {
            console.log(Pokemonobjetivo);
            console.log(this);
        }
}

var pikachu = new Pokemon();
var charmander = new Pokemon();
var pokemon1="";
var pokemon2="";

function crearPokemones(){

    pokemon1 = document.getElementById("pokemon").value;
    pokemon2 = document.getElementById("pokemon1").value;

    pikachu = new Pokemon(pokemon1);
    charmander = new Pokemon(pokemon2);
}
function atacarPokemon(){
    pikachu.atacar(charmander);

    document.form.nomPokemon1.value=pokemon1;
    document.form.nomPokemon2.value=pokemon2;

    document.form.vidaPokemon1.value=pikachu.vida;
    document.form.vidaPokemon2.value=charmander.vida;    
}
