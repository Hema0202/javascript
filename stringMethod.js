//string Methods

// 1.replaceAll:- The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement.

// let str = "i am hema lohana";
// let str = "hello i am priyanka";

// let res = str.replaceAll(/( )\w/g, (word)=>word[1].toUpperCase());
// console.log(res);

// let res = str.replaceAll(/( )\w/g, (word) => word[1].toUpperCase());
// console.log(res);

// ----explanation------
// in replaceAll method we can pass regular expression in first parameter."/( )\w/g" that means word find space globally then that place have to change , then next parameter created the callback function which is always stated that if it find space then word of first character convert into uppercase and then print the result

// let str = "Hello, My name is priya.";

// let res = str.replaceAll("priya","Hema");

// console.log(res);

//explanation---------
// in above example we only give first parameter which is writtern in  str and second paramete which we want to replace the name instead of that.

// let str  = "I love coding";
// let res = str.replaceAll(' ',(word)=>'');
// console.log(res);

//que: convert even to odd with +1
// let str = "125242152178632";

// 1st method
//  str = str.replaceAll("2","3");
//  str = str.replaceAll("4","5");
//  str = str.replaceAll("6","7");
//  str = str.replaceAll("8","9");
//  console.log(str);

// 2nd method
// let str = "125242152178632";
// function replaceEvenToOdd(str){
// let arr = str.split("");
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0) arr[i]++;
// }
// return arr.join("");
// }
// console.log(replaceEvenToOdd(str));

//3rd method
// let str = "3178332234928614";

// let res = str.replaceAll(/\d/g, (num)=> num%2==0 ? ++num : num);

// console.log(res);

// let str = "i am coder";

// let res = str.replaceAll(/( )[a-z]/g, (word) => word[1].toUpperCase());

// console.log(res);

// regex ==>
// start -> ^
// end  -> $
// universal -> *

// String length":- this method calculate the length of string and also calculate the space.
//   let str = "Hema Lohana";
//   let res = str.length;
//   console.log(res);

// String charAt():- charAt method return the word of ur given index
//  let str = "Hello World";
//  let res = str.charAt(2);
//  console.log(res);

// String charCodeAt():- this method return the ascii value
// let str = "Hello World";
//  let res = str.charCodeAt(0);
//  console.log(res);

// String at():- charAt method return the word of ur given index but we will provide minus index also it will calculate from right side
// let str = "Hello World";
// let res = str.charAt(2);
// console.log(res);

// String [ ] :- this is brackate notation if want to access any element with the help of bracket notation.
// let str = "Hello World";
// let res = str[1];
// console.log(res);

// String slice():- this will return the substring first provided index included and second provided index excluded ,slice method count space also. it will retrn new str.
// let str = "Hello World";
// let res = str.slice(2,5);
// console.log(res);

// String substring():- this method is same as slice
// let str = "Hello World";
// let res = str.slice(2,5);
// console.log(res);

// String substr():- this is obsolete method
// let str = "Hello World";
// let res = str.slice(2,5);
// console.log(res);

// String toUpperCase():- this method returns all character in upper case
// let str = "Hello World";
// let res = str.toUpperCase();
// console.log(res);

// String toLowerCase():- this method returns all character in lower case
// let str = "Hello World";
// let res = str.toLowerCase();
// console.log(res);

// String concat():- this method concat two strings
// let str1 = "Hema";
// let str2 = "Lohana";
// let str = str1 +" "+ str2;
// console.log(str);

// let str = str1.concat( str2);
// console.log(" ",str);


// String trim():- removes whitespace from the start and end of a string.
// let str = "     Hema Lohana      "
// let res = str.trim();
// console.log(res);


// String trimStart():- removes whitespace only from the start of a string.
// let str = "       Hema Lohana";
// let res = str.trimStart();
// console.log(res);
 
// String trimEnd():- removes whitespace only from the end of a string.
// let str = "Hema Lohana    ";
// let res = str.trimEnd();
// console.log(res);

// String padStart():-this method pads a string from the start.
// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);

// String padEnd():-this method pads a string from the end.
// let text = "5";
// let padded = text.padEnd(4,"0");
// console.log(padded);

// String repeat():- this method repeat the string in parameter provide the number of time we want to repeat
// let str = "Hema";
// let res = str.repeat(5);
// console.log(res);

// String replace():-if we want to replace only one time in the paragraph or string.
// let str = "Hema Hema";
// let res = str.replace("Hema","Priya");
// console.log(res);

// String split():- this method convert into array.
let str = "Hema";
let res = str.split("");
console.log(res);
