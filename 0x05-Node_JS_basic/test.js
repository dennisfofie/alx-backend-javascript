const fs = require('fs');

const countStudents = (path) => {
	if (!fs.existsSync(path)) {
		throw new Error('Cannot load the database');
	}
	if (!fs.statSync(path).isFile()) {
		throw new Error('cannot load the database');
	}
	const readLine = fs.readFileSync(path, 'utf-8').toString('utf-8').trim().split('\n');

	console.log(readLine);
	fieldname = readLine[0].split(',');
	const studentProp = fieldname.slice(0, fieldname.lenght -1);
	console.log(fieldname);
	console.log(studentProp)

	let cs_count = 0;
	let swe_count = 0;
	let cs_firstName = [];
	let swe_firstName = [];

	for (const line of readLine.slice(1)) {
		const studentRecord = line.split(',');
		console.log(studentRecord.reverse());
		const field = studentRecord[0];
		const firstName = studentRecord[studentRecord.length - 1];
		console.log(firstName);
		console.log(field);

		if (field === 'CS') {
			cs_count += 1;
			cs_firstName.push(firstName);
		}
		else {
			swe_count += 1;
			swe_firstName.push(firstName);
		}

	}
	console.log(', '.join(...cs_firstName));
	console.log('cs_count '+ cs_count);
	console.log('swe_count '+ swe_count);


}


countStudents('./database.csv')
