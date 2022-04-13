import chalk from 'chalk';
import inquirer from 'inquirer';
import DecHex from './DecHex/index.js';
import HexDec from './HexDec/index.js';
import DecBin from './DecBin/index.js';
import BinDec from './BinDec/index.js';
import main from '../index.js';

async function games() {
	console.clear();
	console.log('\n');

	const answer = await inquirer.prompt({
		name: 'game_select',
		type: 'list',
		message: 'Which way do you want to play?',
		choices: [
			chalk.redBright('Dec') + ' -> ' + chalk.yellow('Hex'),
			chalk.yellow('Hex') + ' -> ' + chalk.redBright('Dec'),
			chalk.redBright('Dec') + ' -> ' + chalk.greenBright('Bin'),
			chalk.greenBright('Bin') + ' -> ' + chalk.redBright('Dec'),
			'Back'
		]
	});

	if (answer.game_select == 'Back') {
		main();
	} else if (answer.game_select == chalk.redBright('Dec') + ' -> ' + chalk.yellow('Hex')) {
		DecHex();
	} else if (answer.game_select == chalk.yellow('Hex') + ' -> ' + chalk.redBright('Dec')) {
		HexDec();
	} else if (answer.game_select == chalk.redBright('Dec') + ' -> ' + chalk.greenBright('Bin')) {
		DecBin();
	} else {
		BinDec();
	}

}

export default games;