import React, { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

const GrabPkmn = () => {
	const pokedex = new Pokedex();
	const [mons, setMons] = useState([]);
	const [image, setImage] = useState('');
	const [isClicked, setIsClicked] = useState(false);

	const imageArray = [];
	async function getPoke() {
		const interval = {
			offset: Math.floor(Math.random() * 500),
			limit: 12,
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
		pokemonArray.map((pokemon) =>
			imageArray.push(pokemon.sprites.front_default)
		);
		setTimeout(() => {
			setMons({ imageArray, isClicked });
			// console.log(mons);
			// console.log(mons.imageArray[1]);
			// console.log(imageArray);
		}, 2000);

		// console.log(mons);
		// console.log(mons.imageArray);
		// console.log(imageArray);
	}

	function handleClick() {
		let randomIndex = Math.floor(Math.random() * mons.length);
		setImage(mons[randomIndex]);
		// shuffle(mons);
		setIsClicked(true);
		console.log(isClicked);
	}

	// mons.map(() => {});

	function shuffle(arr) {
		var i = arr.length,
			j = 0,
			temp;

		while (i--) {
			j = Math.floor(Math.random() * (i + 1));

			// swap randomly chosen element with current element
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}

		return arr;
	}

	useEffect(() => {
		getPoke();
	}, []);

	console.log(mons.imageArray);
	return (
		<>
			<div className='grid grid-rows-3 grid-cols-4'>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[0]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[1]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[2]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[3]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[4]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[5]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[6]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[7]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[8]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[9]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[10]}
					onClick={handleClick}
					alt=''
				/>
				<img
					className='border-solid border-2 border-black m-4 w-52 h-52 object-contain'
					src={mons[11]}
					onClick={handleClick}
					alt=''
				/>
			</div>
		</>
	);
};

export default GrabPkmn;
