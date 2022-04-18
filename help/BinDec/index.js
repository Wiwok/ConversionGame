import chalk from 'chalk';
import PromptSync from 'prompt-sync';
const prompt = new PromptSync();

import main from '../index.js';


function BinDec() {
	console.clear();
	console.log('\n' + chalk.bold('How to convert ' + chalk.greenBright('Binary') + ' to ' + chalk.redBright('Decimal') + ' ?\n'));
	console.log('Here we have a ' + chalk.greenBright('binary') + ' number: ' + chalk.greenBright('1101'));
	console.log('And we want to convert it to ' + chalk.redBright('decimal') + '.');
	console.log('Step 1: Multiply digits of ' + chalk.greenBright('binary') + ' number one by one by ' + chalk.magenta('2') + ' at ' + chalk.yellow('power of their position') + ', starting from the right.');
	console.log('Step 2: Add the ' + chalk.cyan('results') + ' together\n');
	console.log(chalk.greenBright('1') + ' * ' + chalk.magenta('2') + '^' + chalk.yellow('0') + ' = ' + chalk.cyan('1'));
	console.log(chalk.greenBright('0') + ' * ' + chalk.magenta('2') + '^' + chalk.yellow('1') + ' = ' + chalk.cyan('0'));
	console.log(chalk.greenBright('1') + ' * ' + chalk.magenta('2') + '^' + chalk.yellow('2') + ' = ' + chalk.cyan('4'));
	console.log(chalk.greenBright('1') + ' * ' + chalk.magenta('2') + '^' + chalk.yellow('3') + ' = ' + chalk.cyan('8'));
	console.log(chalk.cyan('1') + ' + ' + chalk.cyan('0') + ' + ' + chalk.cyan('4') + ' + ' + chalk.cyan('8') + ' = ' + chalk.redBright('13'));
	console.log('\nSomes examples:');
	console.log(chalk.greenBright('101') + ' => ' + chalk.redBright('5'));
	console.log(chalk.greenBright('10100001011101') + ' => ' + chalk.redBright('10333'));
	console.log(chalk.greenBright('1') + ' => ' + chalk.redBright('1'));
	console.log(chalk.greenBright('1101001110101111') + ' => ' + chalk.redBright('54191'));
	console.log('\nPress ' + chalk.greenBright('ENTER') + ' to go back to the menu.');
	prompt('');
	main();
}

export default BinDec;