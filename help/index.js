import chalk from 'chalk';
import inquirer from 'inquirer';
import BinDec from './BinDec/index.js';
import DecBin from './DecBin/index.js';
import HexDec from './HexDec/index.js';
import DecHex from './DecHex/index.js';

import main from '../index.js';

async function help() {

	console.clear();
	console.log('\n');

	const answer = await inquirer.prompt({
		name: 'help_select',
		type: 'list',
		message: 'Which conversion do you want to learn ?',
		choices: [
			'I want to learn ' + chalk.redBright('Dec') + chalk.white(' to ') + chalk.yellow('Hex'),
			'I want to learn ' + chalk.yellow('Hex') + chalk.white(' to ') + chalk.redBright('Dec'),
			'I want to learn ' + chalk.redBright('Dec') + chalk.white(' to ') + chalk.greenBright('Bin'),
			'I want to learn ' + chalk.greenBright('Bin') + chalk.white(' to ') + chalk.redBright('Dec'),
			'Back'
		]
	});

	if (answer.help_select == 'I want to learn ' + chalk.redBright('Dec') + chalk.white(' to ') + chalk.yellow('Hex')) {
		DecHex();
	} else if (answer.help_select == 'I want to learn ' + chalk.yellow('Hex') + chalk.white(' to ') + chalk.redBright('Dec')) {
		HexDec();
	} else if (answer.help_select == 'I want to learn ' + chalk.redBright('Dec') + chalk.white(' to ') + chalk.greenBright('Bin')) {
		DecBin();
	} else if (answer.help_select == 'I want to learn ' + chalk.greenBright('Bin') + chalk.white(' to ') + chalk.redBright('Dec')) {
		BinDec();
	} else if (answer.help_select == 'Back') {
		main();
	}


}


export default help;