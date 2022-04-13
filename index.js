import promptSync from 'prompt-sync';
import figlet from 'figlet';
import inquirer from 'inquirer';
const prompt = promptSync();
let answer;

import games from './games/index.js';
import help from './help/index.js';


function main() {

	console.clear();
	console.log('\n');
	console.log('Welcome to\n');
	figlet('Conversion', 'Sub-Zero', (err, data) => { console.log(data); });
	setTimeout(() => {
		figlet('Game', 'Sub-Zero', (err, data) => { console.log(data); });
	}, 10);
	setTimeout(async () => {
		console.log('\n\n');
		console.log('It\'s a game where you will learn how to convert hexadecimal, decimal and binary\n\n');

		answer = await inquirer.prompt({
			name: 'menu_select',
			type: 'list',
			message: 'What do you wanna do ?',
			choices: [
				'Play',
				'Help',
				'View credits',
				'Quit'
			]
		});

		if (answer.menu_select == 'Play') {
			games();
		} else if (answer.menu_select == 'Help') {
			help();

		} else if (answer.menu_select == 'View credits') {
			console.clear();
			console.log('This game was made by Wiwok:');
			console.log('https://github.com/Wiwok');
			console.log('\n');
			console.log('Press enter to return to the menu...');
			prompt('');
			main();

		} else {
			console.clear();
			process.exit(0);
		}

	}, 10);
}

export default main;

main();
