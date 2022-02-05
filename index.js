async function handleSubmit(event) {
	event.preventDefault();
	const pokemonName = event.target.elements.name.value;
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	);
	const data = await response.json();
	document.getElementById("image").src = data.sprites.front_default;
	console.log(data.sprites.front_default);
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
