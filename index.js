class Pokemon {
	constructor() {
		this.nombre = "POKÉMON " + Math.floor(Math.random() * 101)
	}

	describir() {
		[
			'.............................................',
			"Estas mirando un Pokémon:                    ",
			`   Este Pokémon se llama:   ${this.nombre}   `,
			"============================================="
		].forEach(linea => console.log(linea))
	}

	get nombre() {
		return `POKEMON: ${this.nombre}]`
	}

	set nombre(nombre) {
		this.nombre = "RENAMED: " + nombre
	}
}

const pokemon1 = new Pokemon()
 const pokemon2 = new Pokemon()
 const pokemon3 = new Pokemon()
 const pokemon4 = new Pokemon()

// pokemon3.describir()
pokemon2.describir()

console.log(pokemon1.nombre)
console.log(pokemon4.nombre)

pokemon1.nombre = "Paco"
console.log(pokemon1.nombre)
pokemon1.describir()
