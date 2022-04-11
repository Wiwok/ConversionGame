import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function reverse(s) {
	return s.split(' ').reverse().join(' ');
}


function DecToHex(decNumber) {
	let hexNumber = decNumber % 16;
	decNumber = Math.trunc(decNumber / 16);
	let turns = 0;
	while (decNumber != 0) {
		hexNumber = hexNumber + ' ' + (decNumber % 16);
		decNumber = Math.trunc(decNumber / 16);
		turns++;
	}

	// Reverse hexNumber

	hexNumber = reverse(hexNumber.toString());

	while (hexNumber.toString().includes('10')) {
		hexNumber = hexNumber.toString().replace('10', 'A');
	}
	while (hexNumber.toString().includes('11')) {
		hexNumber = hexNumber.toString().replace('11', 'B');
	}
	while (hexNumber.toString().includes('12')) {
		hexNumber = hexNumber.toString().replace('12', 'C');
	}
	while (hexNumber.toString().includes('13')) {
		hexNumber = hexNumber.toString().replace('13', 'D');
	}
	while (hexNumber.toString().includes('14')) {
		hexNumber = hexNumber.toString().replace('14', 'E');
	}
	while (hexNumber.toString().includes('15')) {
		hexNumber = hexNumber.toString().replace('15', 'F');
	}
	while (hexNumber.toString().includes(' ')) {
		hexNumber = hexNumber.toString().replace(' ', '');
	}

	return hexNumber;
}

function DecHex() {

	// eslint-disable-next-line no-constant-condition

	const decNumber = randomInt(0, 32);
	const hexNumber = DecToHex(decNumber);

	console.log('\n');
	console.log('Decimal number: ' + chalk.redBright(decNumber));
	console.log('What is the hexa equivalent ?');
	let number = prompt('> ').toLowerCase();

	while (number.includes(' ')) {
		number = number.replace(' ', '');
	}

	const newHexNumber = hexNumber.toString().toLowerCase();

	if (newHexNumber == number) {
		console.log(chalk.green('Right!!'));
		console.log('You\'re right, ' + chalk.yellow(hexNumber) + ' is the correct answer.');
	} else {
		console.log(chalk.red('Wrong!!'));
		console.log('The correct answer is: ' + chalk.yellow(hexNumber));
	}

}


export default DecHex;