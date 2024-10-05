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
    // Extiende el Pokemon. los pokemons normalmente no pueden quemar
    quemar() {
        console.log(`El pokemon ${this.nombre} (${this.id}) está que arde`)
    }

    // Sobrecarga el ataque => los poquemons de fuego queman al acerecarse
    atacar() {
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

class Pokedex {
    constructor(color = "SIN_COLOR") {
        this.color = color

        // COMPOSICION: El objeto Pokedex se forma de objetos Pokemon
        this.pokediccionario = [
            new Pokemon("Charmander"), // pos: 0
            new Pokemon("Bulbasaur"),  // pos: 1
            new Pokemon(),             // pos: 2
            new Pokemon(),             // pos: 3
        ]

        console.log("NUEVA Pokedex CREADA:")
        this.listar()
    }

    listar() {
        console.log("    POKEDEX: " + this.color)
        this.pokediccionario.forEach(pokemon => pokemon.describir())
    }
}

let myDragoncito = new PokemonFuego("Charizard")
 myDragoncito.describir()
 myDragoncito.atacar()
 myDragoncito.quemar()
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

const miLibroAzul = new Pokedex("azul")
const miLibroRosita = new Pokedex("rosa")
miLibroAzul.pokediccionario[2].nombre = "Pikachu"
miLibroRosita.pokediccionario[2].nombre = "Squirtle"

console.log("********************************************")
miLibroAzul.listar()
miLibroRosita.listar()

// Ejercicio Sencillo: hacer una pokedex con pokemons de varios tipos
// Ejercicio Facil: Hacer una clase PokemonVolador. PokemonFuegoVolador (charizard)
