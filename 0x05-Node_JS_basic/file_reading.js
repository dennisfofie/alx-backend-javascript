const fs = require('fs');

console.log('Executed before');

fs.readFile('.README.md', 'utf8', (error, data) => {
	console.log(data);

});
