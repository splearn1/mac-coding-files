// ~ DEMO 2 START ~ \\
function greeting(greeting) {
	return function (name) {
		return `${name}! ${greeting}`;
	};
}

const basicWelcome = greeting('Welcome.');
const friendlyWelcome = greeting('So glad to see you again!');

console.log('basicWelcome:', basicWelcome('John'));
console.log('friendlyWelcome:', friendlyWelcome('John'));
// ~ DEMO 2 END ~ \\


var x = 10;
console.log(x);

if(true) {
	var x = 2;
	console.log(x);
}
console.log(x);