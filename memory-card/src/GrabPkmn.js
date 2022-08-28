import React, { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

const GrabPkmn = () => {
	const pokedex = new Pokedex();
	const [mons, setMons] = useState([]);
	const [image, setImage] = useState('');

	async function getPoke() {
		const interval = {
			offset: Math.floor(Math.random() * 500),
			limit: 8,
		};
		let request = await pokedex.getPokemonsList(interval);
		let listOfMons = request.results;

		const promises = await Promise.all(
			listOfMons.map((pokemons) => fetch(pokemons.url))
		);
		const pokemonArray = await Promise.all(
			promises.map((promise) => promise.json())
		);

		console.log(pokemonArray);
		let imageArray = pokemonArray.map(
			(pokemon) => pokemon.sprites.front_default
		);
		setMons(imageArray);

		console.log(imageArray);
	}

	function getRandomPokemon() {
		let randomIndex = Math.floor(Math.random() * mons.length);
		setImage(mons[randomIndex]);
	}

	useEffect(() => {
		getPoke();
	}, []);

	return (
		<>
			<div className='grid grid-rows-2 grid-cols-4'>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[Math.floor(Math.random() * mons.length)]}
					onClick={getRandomPokemon}
					alt=''
				/>
			</div>
		</>
	);
};

export default GrabPkmn;
