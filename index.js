async function handleSubmit(event) {
	event.preventDefault();
	const pokemonName = event.target.elements.name.value.toLowerCase();
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		const data = await response.json();

		//TODO: Add Extra-small class
		let pokemonHeight;
		data.height <= 19 ? (pokemonHeight = "small") : (pokemonHeight = "large");

		document.getElementById("sprite").setAttribute("class", pokemonHeight);

		document.getElementById("sprite").setAttribute("href", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`);
		document.getElementById("HP").textContent = `HP: ${data.stats[0].base_stat}`;
		document.getElementById("Att").textContent = `Att: ${data.stats[1].base_stat}`;
		document.getElementById("Def").textContent = `Def: ${data.stats[2].base_stat}`;
		document.getElementById("Sp Att").textContent = `Sp Att: ${data.stats[3].base_stat}`;
		document.getElementById("Sp Def").textContent = `Sp Def: ${data.stats[4].base_stat}`;
		document.getElementById("Spd").textContent = `Spd: ${data.stats[5].base_stat}`;
		document.getElementById("type-screen_text--left").textContent = "";
		document.getElementById("type-screen_text--right").textContent = "";
		document.getElementById("type-screen_text--left").textContent = data.types[0].type.name;
		if (data.types.length > 1) {
			document.getElementById("type-screen_text--right").textContent = data.types[1].type.name;
		}
	} catch (e) {
		displayMissingNo();
	}
}

function displayMissingNo() {
	document.getElementById("type-screen_text--left").textContent = "n/a";
	document.getElementById("type-screen_text--right").textContent = "n/a";
	document.getElementById("sprite").setAttribute("href", "./img/MissingNo..webp");
	document.getElementById("HP").textContent = `HP: 404`;
	document.getElementById("Att").textContent = `Att: 404`;
	document.getElementById("Def").textContent = `Def: 404`;
	document.getElementById("Sp Att").textContent = `Sp Att: 404`;
	document.getElementById("Sp Def").textContent = `Sp Def: 404`;
	document.getElementById("Spd").textContent = `Spd: 404`;
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
