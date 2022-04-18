import chalk from 'chalk';
import PromptSync from 'prompt-sync';
const prompt = new PromptSync();
import main from '../index.js';

function DecHex() {
	console.clear();
	console.log('\n' + chalk.visible('How to convert ' + chalk.redBright('decimal') + ' to ' + chalk.yellow('hexadecimal') + ' ?\n'));
	console.log('Here we have a ' + chalk.redBright('decimal') + ' number: ' + chalk.redBright('20'));
	console.log('And we want to convert it to ' + chalk.yellow('hexadecimal') + '.');
	console.log('Step 1: Divide the ' + chalk.redBright('decimal') + ' number by ' + chalk.magenta('16') + ' and get the ' + chalk.cyan('quotient') + ' and ' + chalk.greenBright('remainder') + ': ' + chalk.redBright('20') + ' / ' + chalk.magenta('16') + ' = ' + chalk.cyan('1') + ' and ' + chalk.redBright('20') + ' % ' + chalk.magenta('16') + ' = ' + chalk.greenBright('4'));
	console.log('Step 2: Divide the ' + chalk.cyan('quotient') + ' by ' + chalk.magenta('16') + ' and repeat the process until the ' + chalk.cyan('quotient') + ' is 0. ');
	console.log('Step 3: Put the ' + chalk.greenBright('remainers') + ' one after the other in reverse order to get the ' + chalk.yellow('hexadecimal') + ' number: ' + chalk.greenBright('1') + ' + ' + chalk.greenBright('4') + ' = ' + chalk.yellow('14'));
	console.log('\nSo, ' + chalk.redBright('20') + ' equals ' + chalk.yellow('14') + ' in ' + chalk.yellow('hexadecimal'));

	console.log('\n\nWarning, in ' + chalk.yellow('hexadecimal') + ', ' + chalk.cyan('quotient') + ' greater than 9 will be written as ABCDEF, where ' + chalk.yellow('F') + ' is equals to ' + chalk.redBright('15') + '.');


	console.log('\nExemples:');
	console.log(chalk.redBright('2000') + ' => ' + chalk.yellow('7D0'));
	console.log(chalk.redBright('255') + ' => ' + chalk.yellow('FF'));
	console.log(chalk.redBright('90') + ' => ' + chalk.yellow('5A'));
	console.log(chalk.redBright('43589') + ' => ' + chalk.yellow('AA45'));
	console.log(chalk.redBright('1') + ' => ' + chalk.yellow('1'));

	console.log('\nPress ' + chalk.greenBright('ENTER') + ' to go back to the menu.');
	prompt('');
	main();

}

export default DecHex;