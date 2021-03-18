const PLANETS = [
	{name: 'Mercury', gravity: 3.7},
	{name: 'Venus', gravity: 8.87},
	{name: 'Earth', gravity: 9.8},
	{name: 'Mars', gravity: 3.71},
	{name: 'Jupiter', gravity: 24.79},
	{name: 'Saturn', gravity: 10.44},
	{name: 'Uranus', gravity: 8.87},
	{name: 'Neptune', gravity: 11.15}
];

PLANETS.forEach(function(planet){
	console.log(`The planet: ${planet.name} has the gravity ${planet.gravity} kg/m^2`);
});


	