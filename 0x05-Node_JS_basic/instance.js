// spawn in js
//
const fs = require('fs');

const countStudents = (path) => {
	fs.readFileSync(path, 'utf-8', (error, data) => {
		if (error) {
			console.log(error);
		}
		else {
			console.log(data);
		}
	});
;

const result = countStudents('./database.csv');
console.log(result);
