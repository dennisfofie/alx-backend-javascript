const countStudents = require('./3-read_file_async');

constStudent('nope.csv');
.then(() => {
	console.log("Done");
})
.catch((error) => {
	console.log(error);
}
