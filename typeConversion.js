// Type Conversion in js


// string -> array

// let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


// let charArray = str.split('.');
// console.log(charArray);


 
// array -> string

// let arr = [1,2,'3',4];
// let str = arr.toString();   X (not prefered)
// console.log(str);

// let joinStr = arr.join(" ");
// console.log(joinStr);



// string -> number
let numStr = '45.56';
// let num = Number(numStr); //prefered when decimal is also present

// let num = parseInt(numStr);// Preferred way to convert a string into an integer number

// let num =Math.floor(numStr);

// let num =parseFloat(numStr);// preferred way to convert a string with decimals into a float


// let num = +numStr; // shorthand for parseFloat or just + sign before the variable will do the same thing as parseFloat
// console.log(typeof num, num);


// number ->string
// let num = 98;
// let str = String(num); //not prefered

// let str = `${num}`; //prefered method of converting numbers into strings

// let str = num+"";//Another way to do it 

// let str = num.toString(/*base*/); //Most prefered way, base is optional and by default its value is 10 whic represents the base system i.e., decimal system.
// console.log(typeof str, str);

let num = 8;
let binaryStr = num.toString(2);//converts the given base-10 number to its equivalent value in base-2
console.log(binaryStr);

