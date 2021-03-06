var obj = {};

obj.x = 5;
obj.y = 10;
obj.multiply = function() {
	console.log(this.x * this.y);
}

obj.multiply();
/* Object created by hand ^-- */


// Making a constructor or 'class' - capitalize first letter;


var User = function(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
		// this.logName = function() {
		// 	console.log(this.name);
		// }
}

User.prototype.logName = function() { // * Note: People say you shouldn't change the prototype of the string or array constructor
	console.log(this.name);
}

var me = new User('Bob', 40, 'bob@bob.com'); // calling the constructor - creates a new instance of the object.
var you = new User('Johnny-Boy', 6, 'achild@bob.com');

console.log(me.name);
you.logName();

/* Maker function */ // has a few drawbacks
var makeUser = function(name, age, email) {
	return {
		name: name,
		age: age,
		email: email
	}
}

var Animal = function(species) {
	this.species = species;
}

Animal.prototype.evolve = function() {
	console.log(this.species + ' evolved!');
}

var cat = new Animal('Feline something or other');
cat.evolve();

var Human = function(name, sex) {
	Animal.call(this, 'Homo Sapien'); //tells Animal that 'this' in this case means 'homo sapien'
	this.name = name;
	this.sex = sex;
}

Human.prototype = Object.create(Animal.prototype); 	//overwrites prototype constructor
Human.prototype.constructor = Human;				//reset the constructor
Human.prototype.sayHi = function() {
	console.log(this.name + ' says \'Hello!\'');
}
var me = new Human('Jeff', 'male');
me.sayHi();
me.evolve();
