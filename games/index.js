import chalk from 'chalk';
import inquirer from 'inquirer';
let answer;

import DecHex from './DecHex/index.js';
import HexDec from './HexDec/index.js';
import DecBin from './DecBin/index.js';
import BinDec from './BinDec/index.js';

async function games() {

	console.log('\n');

	answer = await inquirer.prompt({
		name: 'game_select',
		type: 'list',
		message: 'Which way do you want to play?',
		choices: [
			chalk.redBright('Dec') + ' -> ' + chalk.yellow('Hex'),
			chalk.yellow('Hex') + ' -> ' + chalk.redBright('Dec'),
			chalk.redBright('Dec') + ' -> ' + chalk.greenBright('Bin'),
			chalk.greenBright('Bin') + ' -> ' + chalk.redBright('Dec'),
			'Quit'
		]
	});

	if (answer.game_select == 'Quit') {
		console.clear();
		process.exit(0);
	} else if (answer.game_select == chalk.redBright('Dec') + ' -> ' + chalk.yellow('Hex')) {
		console.clear();
		DecHex();
	} else if (answer.game_select == chalk.yellow('Hex') + ' -> ' + chalk.redBright('Dec')) {
		console.clear();
		HexDec();
	} else if (answer.game_select == chalk.redBright('Dec') + ' -> ' + chalk.greenBright('Bin')) {
		console.clear();
		DecBin();
	} else {
		console.clear();
		BinDec();
	}

}

export default games;