import chalk from 'chalk';
import PromptSync from 'prompt-sync';
const prompt = new PromptSync();
import main from '../index.js';

function DecBin() {
	console.clear();
	console.log('\n');
	console.log('\n' + chalk.bold('How to convert ' + chalk.redBright('Decimal') + ' to ' + chalk.greenBright('Binary') + ' ? '));
	console.log('\nHere we have a ' + chalk.redBright('decimal') + ' number: ' + chalk.redBright('13'));
	console.log('And we want to convert it to ' + chalk.greenBright('binary') + '.');
	console.log('Step 1: Divide the ' + chalk.redBright('decimal') + ' number by ' + chalk.magenta('2') + ' and get the ' + chalk.cyan('quotient') + ' and ' + chalk.yellow('remainder') + ': ' + chalk.redBright('13') + ' / ' + chalk.magenta('2') + ' = ' + chalk.cyan('6') + ' and ' + chalk.redBright('13') + ' % ' + chalk.magenta('2') + ' = ' + chalk.yellow('1'));
	console.log('Step 2: Divide the ' + chalk.cyan('quotient') + ' by ' + chalk.magenta('2') + ' and repeat the process until the ' + chalk.cyan('quotient') + ' is 0. ');
	console.log('Step 3: Put the ' + chalk.yellow('remainers') + ' one after the other in reverse order to get the ' + chalk.greenBright('binary') + ' number: ' + chalk.yellow('1') + chalk.yellow('1') + ' + ' + chalk.yellow('0') + chalk.yellow('1') + ' = ' + chalk.greenBright('1101'));
	console.log('\nSome examples:');
	console.log(chalk.redBright('255') + ' => ' + chalk.greenBright('11111111'));
	console.log(chalk.redBright('90') + ' => ' + chalk.greenBright('1011010'));
	console.log(chalk.redBright('43589') + ' => ' + chalk.greenBright('1010101001000101'));
	console.log(chalk.redBright('1') + ' => ' + chalk.greenBright('1'));
	console.log('\nTips: If the ' + chalk.redBright('decimal') + ' number is odd, the last ' + chalk.greenBright('binary') + ' digit will be ' + chalk.greenBright('1') + '.\n');
	console.log('Press ' + chalk.greenBright('ENTER') + ' to go back to the menu.');
	prompt('');
	main();
}

export default DecBin;