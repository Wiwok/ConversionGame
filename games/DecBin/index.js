import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();


function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function reverse(s) {
	return s.split('').reverse().join('');
}

function DecToBin(decNumber) {
	let hexNumber = decNumber % 2;
	decNumber = Math.trunc(decNumber / 2);
	while (decNumber != 0) {
		hexNumber = hexNumber + '' + (decNumber % 2);
		decNumber = Math.trunc(decNumber / 2);
	}

	hexNumber = reverse(hexNumber.toString());

	/* for (let i = 0; i < hexNumber.toString().length() / 4; i++) {
		hexNumber = hexNumber.toString()[4 ** i].split('').join(' ');
	}*/

	return hexNumber;
}

function DecBin() {

	const decNumber = randomInt(0, 65535);

	const binNumber = DecToBin(decNumber);

	console.clear();
	console.log('\n');
	console.log('Decimal number: ' + chalk.redBright(decNumber));
	console.log('What is the binary equivalent ?');
	let number = prompt('> ').toLowerCase();

	while (number.includes(' ')) {
		number = number.replace(' ', '');
	}

	if (binNumber.toString().toLowerCase() == number) {
		console.log(chalk.green('Right!!'));
		console.log('You\'re right, ' + chalk.greenBright(binNumber) + ' is the correct answer.');
	} else {
		console.log(chalk.red('Wrong!!'));
		console.log('The correct answer is: ' + chalk.greenBright(binNumber));
	}

	console.log('\nPress a key to go back to the menu...');
	prompt('');

}


export default DecBin;