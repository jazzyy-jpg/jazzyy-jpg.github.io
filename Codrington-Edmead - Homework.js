// write a variable that is a string and output to console (hint: it's console.log(variable name))

let firstName = "Yasmeen"; console.log(firstName)

// write a variable that is a number and output to console (hint: it's console.log(variable name))

let number10 = 10;
console.log(number10);

// write a variable that takes any two numbers and adds them 

let numberOne = 10;
let numberTwo = 10;
let sum = cuteDaisy + cuteLady;

// write a variable that takes any two numbers and subtracts them and output to console

let numberThree = 10;
let numberFour = 10;
console.log(numberThree - numberFour);

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 

let numberFive = 5;
let numberSix = 2;
console.log(numberFive % numberSix);

// write a variable that takes any two numbers and perform an exponential value and output to console 

let numberSeven = 2;
let numberEight = 2;
console.log(numberSeven ** numberEight);

// write a statement that is false using a conditional statement and output to console 

let gradeScale = 50;

if (gradeScale >= 60) {
    console.log("You passed");
} else {
    console.log("You failed");
}

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        console.log(siggy.breed);
        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

        

    }
}

console.log(siggy.breed);

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice

let cuteLady = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        console.log(cuteLady.breed);
        return `Lady is a ${this.breed} that is a ${this.fluffy} ${this.baby}`    

    }
}

// then, I want you to change the object to the value of your choosing  

cuteLady.breed = "bi-color";
cuteLady.baby = "sweet baby";
cuteLady.fluffy = "extra squishy";

// console.log the values of that object one by one. 


console.log(cuteLady.breed);
console.log(cuteLady.baby);
console.log(cuteLady.fluffy);


// create an array 

let cats = ["lady", "daisy", "mimi"];

// call the value in the 3 position of this array and output to console 

let someArray = ["lady", "daisy", "mimi"];
console.log(someArray[2]);

// call all values in the array using a loop 

let kitties = ["lady", "daisy", "mimi"];
for (let i = 0; i < kitties.length; i = i + 1) {
    console.log(kitties[i]);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log(ifStatement);
