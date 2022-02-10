async function handleSubmit(event) {
	event.preventDefault();
	const pokemonName = event.target.elements.name.value;
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		const data = await response.json();
		document.getElementById("sprite").src = data.sprites.front_default;
		document.getElementById("HP").textContent = `HP: ${data.stats[0].base_stat}`;
		document.getElementById("Att").textContent = `Att: ${data.stats[1].base_stat}`;
		document.getElementById("Def").textContent = `Def: ${data.stats[2].base_stat}`;
		document.getElementById("Sp Att").textContent = `Sp Att: ${data.stats[3].base_stat}`;
		document.getElementById("Sp Def").textContent = `Sp Def: ${data.stats[4].base_stat}`;
		document.getElementById("Spd").textContent = `Spd: ${data.stats[5].base_stat}`;
	} catch (e) {
		document.getElementById("image").src = "/img/MissingNo..webp";
	}
}

// Grab the form element and add an event listener to it
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
