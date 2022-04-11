import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();


function DecBin() {

	const number = prompt('> ');

	console.log(2 ** number);

	// Generate a random dec number and its bin value

	// Tell the user the dec, and ask for the bin value

}


export default DecBin;