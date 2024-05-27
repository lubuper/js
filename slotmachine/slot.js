// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin the black circle
// 5. Check if user won
// 6. Give the user their winnings
// 7. Restart

//1.

// using the prompt-sync module
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

//map of symbols and its count
const SYMBOLS_COUNT = {
	A: 2,
	B: 4,
	C: 6,
	D: 8
}

const SYMBOL_VALUES = {
	A: 4,
	B: 3,
	C: 2,
	D: 1
}


const deposit = () =>
{
	while (true)
	{
		const depositAmount_str = prompt("Enter your initial deposit: ");
		const DepositAmount_f = parseFloat(depositAmount_str);
		if (isNaN(DepositAmount_f) || DepositAmount_f <= 0)
			console.log("Invalid deposit amount ");
		else
			return DepositAmount_f;
	}
}

//2.

const howManyLines = () =>
{
	while (true)
	{
		const LinesStr = prompt("Enter how many lines you want to bet (1-3): ");
		const linesFloat = parseFloat(LinesStr);
		if (isNaN(linesFloat) || linesFloat <= 0 || linesFloat > 3)
			console.log("Invalid number ");
		else
			return linesFloat;
	}
}

//3.
const getBet = (balance, lines) =>
{
	while (true)
	{
		const bet = prompt ("Enter your bet per line: ");
		const betFloat = parseFloat(bet);
		if (isNaN(betFloat) || betFloat <= 0 || betFloat > balance / lines)
			console.log("Invalid bet ")
		else
		{
			return (betFloat);
		}
	}
}


//4.
const spin = () =>
{
	const symbols = [];
	for (const [symbol, count] of Object.entries(SYMBOLS_COUNT))
	{
		for (let i = 0; i < count; i++)
			symbols.push(symbol);
	}
	const reels = [[],[],[]];
	for (let i = 0; i < COLS; i++)
	{
		const reelSymbols = [...symbols];
		for (let j = 0; j < ROWS; j++)
		{
			const randomI = Math.floor(Math.random() * reelSymbols.length);
			const selectedSymbol = reelSymbols[randomI];
			reels[i].push(selectedSymbol);
			reelSymbols.splice(randomI, 1);
		}
	}
	return reels;
}

const reels = spin();
console.log(reels);
let balance = deposit();
const betLines = howManyLines();
const bet = getBet(balance, betLines);