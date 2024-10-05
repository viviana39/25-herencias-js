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
}

class Pokedex {
    constructor(color = "SIN_COLOR") {
        this.color = color
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


const miLibroAzul = new Pokedex("azul")
const miLibroRosita = new Pokedex("rosa")
miLibroAzul.pokediccionario[2].nombre = "Pikachu"
miLibroRosita.pokediccionario[2].nombre = "Squirtle"

console.log("********************************************")
miLibroAzul.listar()
miLibroRosita.listar()
