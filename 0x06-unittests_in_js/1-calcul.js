// Test basic operation of maths
//

const calculateNumber = (type, a, b) => {
	const typeArray = ['SUM', 'SUBTRACT', 'DIVIDE'];
	a = Math.round(a);
	b = Math.round(b);
	let result = 0;

	if (type === typeArray[0] || type.toUpperCase ===  typeArray[0]) {
		result = a + b;
	}
	else if (type === typeArray[1] || type.toUpperCase === typeArray[1]) {
		result = a - b;
	}
	else if (type === typeArray[2] || type.toUpperCase === typeArray[2]) {
		if (b === 0) {
			return 'Error';
		}
		result = a / b;
	}
	return result;
}

module.exports = calculateNumber;

//const result = calculateNumber('sum', 1.4, 4.5);
//console.log(result);
