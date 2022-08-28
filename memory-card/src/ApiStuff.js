// import React, { useEffect, useState } from 'react';

// const arr = [];

// 	const [mons, setMons] = useState([]);

// 	const getData = async () => {
// 		let request = await fetch(
// 			'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
// 		);
// 		let response = await request.json();
// 		let list = response.results;
// 		console.log(list);

// 		for await (const element of list) {
// 			let r = element.url;
// 			console.log(r);
// 			arr.push(r);
// 			console.log(arr);
// 			setMons([arr]);
// 			console.log(mons);
// 			for await (const e of responses){

// 			}
// 			arr.push(responses);
// 			console.log(arr);
// 		}

// 		}

// 	useEffect(() => {
// 		getData();
// 	}, []);

// 	return (
// 		<>
// 			<h2>React Fetch API Example</h2>
// 			<ul>
// 				{arr.map((item, i) => {
// 					return (
// 						<div>
// 							<img src={mons} />
// 						</div>
// 					);
// 				})}
// 			</ul>
// 			{/* <img src={mons} alt='mons' /> */}
// 			{/* {mons.map((item, i) => {
// 				return <img src={mons} />;
// 			})} */}
// 		</>
// 	);

// export default ApiStuff;
