class Pokemon {
    constructor(nombre = "Pacomon") {
        this.id = Math.floor(Math.random() * 10000000001)
        this.nombre = nombre
    }

    describir() {
        [
            '.............................................',
            `Estas mirando el Pokémon:   ${this.id}       `,
            `   Este Pokémon se llama:   ${this.nombre}   `,
            "============================================="
        ].forEach(linea => console.log(linea))
    }

    atacar() {
        console.log(`${this.nombre} realizó placaje`)
    }
}

class PokemonFuego extends Pokemon {
    // Sobrecarga el ataque => los poquemons de fuego queman al acerecarse
    atacar() {
        super.atacar()
        console.log(`${this.nombre} quemó al enemigo`)
    }
}

class PokemonPsi extends Pokemon {
    // sobrecarga constructor
    constructor(nombre = "Psicomon", poder = "Telequinesis") {
        // ESPECIAL -> llama al super
        super(nombre)
        this.poder = poder
    }

    atacar () {
        console.log(`${this.nombre} uso el poder ${this.poder}`)
    }
}


    class PokemonVolador extends Pokemon {
        constructor(nombre = "Voladores", poder = "rafaga de viento") {
            super(nombre);
            this.poder = poder;
        }
    
        atacar() {
            console.log(`${this.nombre} usó el poder ${this.poder}`);
        }
    }

class Pokemonvenenoso extends Pokemon {
    constructor(nombre = "veneno", poder = "mata al instante"){
        super(nombre);
        this.poder = poder;
    }
    
    atacar(){
        console.log(`${this.nombre} usó el poder ${this.poder}`);
       
    }
}

class Pokedex {
    constructor(color = "SIN_COLOR") {
        this.color = color

class pokedex {
    constructor (color = "Oceano"){
        this.color =color 
    }
}

        // COMPOSICION: El objeto Pokedex se forma de objetos Pokemon
        this.pokediccionario = [
            new Pokemon("Charmander"), // pos: 0
            new Pokemon("Bulbasaur"),  // pos: 1
            new Pokemon(),             // pos: 2
            new Pokemon(),             // pos: 3
            new Pokemon("pidgey"),
            new Pokemon("hoothoot"),
            new Pokemon("weezing"),
            new Pokemon("toxicoak"),
            new Pokemon("muk")
        ]

        console.log("NUEVA Pokedex CREADA:")
        this.listar()


        console.log("NUEVA Pokedex de viento CREADA:")
        this.listar()

        console.log("NUEVA Pokedex Venenosa")
    }

    listar() {
        console.log("    POKEDEX: " + this.color)
        this.pokediccionario.forEach(pokemon => pokemon.describir())
    }
}

let myDragoncito = new PokemonFuego("Charizard")
myDragoncito.describir()
myDragoncito.atacar()
console.log("")
console.log("")

miTortugita = new Pokemon("Squirtel")
miTortugita.describir()
miTortugita.atacar()
// miTortugita.quemar() // Torugita no puede quemar por que no es de tipo fuego
console.log("")
console.log("")
miPsi = new PokemonPsi()
miPsi.describir()
miPsi.atacar()

miPsiloko = new PokemonPsi("LokoMon", "Enloquece")
miPsiloko.describir()
miPsiloko.atacar()

let mypokevolador = new PokemonVolador("hoothoot","rafaga de viento")
mypokevolador.describir()
mypokevolador.atacar()
console.log("");
console.log("");


let mypokemon = new Pokemonvenenoso("hoothoot","rafaga de viento")
mypokemon.describir()
mypokemon.atacar()
console.log("");
console.log("");



const miLibroAzul = new Pokedex("azul")
const miLibroRosita = new Pokedex("rosa")
const miLibroOceano = new Pokedex("Oceano")
const miLibroVerde = new Pokedex("verde")
miLibroAzul.pokediccionario[2].nombre = "Pikachu"
miLibroRosita.pokediccionario[2].nombre = "Squirtle"
miLibroOceano.pokediccionario[4].nombre = "hoothoot"
miLibroVerde.pokediccionario[7].nombre = "toxicoak"

console.log("********************************************")
miLibroAzul.listar()
miLibroRosita.listar()
miLibroOceano.listar()
miLibroVerde.listar()

// Ejercicio Sencillo: hacer una pokedex con pokemons de varios tipos
// Ejercicio Facil: Hacer una clase PokemonVolador. PokemonFuegoVolador (charizard)
