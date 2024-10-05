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

const pokemon1 = new Pokemon("Charmander")
const pokemon2 = new Pokemon("Bulbasaur")
const pokemon3 = new Pokemon()
const pokemon4 = new Pokemon()

// pokemon3.describir()
pokemon1.describir()
pokemon2.describir()
pokemon3.describir()
pokemon4.describir()

console.log(pokemon1.nombre)
console.log(pokemon3.nombre)
console.log(pokemon4.nombre)
console.log(pokemon4.nombre)

pokemon1.nombre = "Michi"
console.log(pokemon1.nombre)
pokemon1.describir()
