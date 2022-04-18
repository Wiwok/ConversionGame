import chalk from 'chalk';
import PromptSync from 'prompt-sync';
const prompt = new PromptSync();
import main from '../index.js';

function HexDec() {
	console.clear();
	console.log('\n' + chalk.visible('How to convert ' + chalk.yellow('Hexadecimal') + ' to ' + chalk.redBright('Decimal') + ' ?\n'));
	console.log('Step 1. Convert each letter to its ' + chalk.redBright('decimal') + ' equivalent.');
	console.log('Step 2. Multiply each number by ' + chalk.magenta('16') + ' to the ' + chalk.greenBright('power of the number of letters') + '.\n');
	console.log('Hexadecimal number: ' + chalk.redBright('AC5'));
	console.log(chalk.yellow('(5)') + ' => ' + chalk.yellow('5') + ' * ' + chalk.magenta('16') + '^' + chalk.greenBright('0') + ' = ' + chalk.yellow('5'));
	console.log(chalk.yellow('(C)') + ' => ' + chalk.yellow('12') + ' * ' + chalk.magenta('16') + '^' + chalk.greenBright('1') + ' = ' + chalk.yellow('192'));
	console.log(chalk.yellow('(A)') + ' => ' + chalk.yellow('10') + ' * ' + chalk.magenta('16') + '^' + chalk.greenBright('2') + ' = ' + chalk.yellow('2560'));
	console.log(chalk.yellow('5') + ' + ' + chalk.yellow('192') + ' + ' + chalk.yellow('2560') + ' = ' + chalk.redBright('2757'));
	console.log('\nSomes examples:');
	console.log(chalk.yellow('FF') + ' => ' + chalk.redBright('255'));
	console.log(chalk.yellow('5A') + ' => ' + chalk.redBright('90'));
	console.log(chalk.yellow('AA45') + ' => ' + chalk.redBright('43589'));
	console.log(chalk.yellow('1') + ' => ' + chalk.redBright('1'));
	console.log('\nPress ' + chalk.greenBright('ENTER') + ' to go back to the menu.');
	prompt('');
	main();
}

export default HexDec;