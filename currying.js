// At its core, currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.


// Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, each taking a single argument. Its benefits include partial application, modularity, flexibility, lazy evaluation, and improved error handling.


// currying is particularly useful when you have functions with varying numbers of arguments or when you want to create specialized versions of a function with preset arguments. It allows you to create new functions based on the original function with specific arguments already set, which can enhance modularity and code reusability.


//normal function
// function ThreeSum(a, b, c){
//     return a+b+c;
// }

// console.log(ThreeSum(5,6,7));


//with the help of currying

// function ThreeSum(a){
//     return function(b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(ThreeSum(5)(6)(7));


// Currying using ES6 syntax in JavaScript

// const ThreeSum = a => b => c => a+b+c;

// console.log(ThreeSum(5)(6)(7))



// function ThreeSum(a){
//     return function TwoSum(b,c){
//         return b*c;
//     }

// }

// console.log(ThreeSum(1)(5,6));


function ThreeSum(a){
    function TwoSum(b,c){
        return b+c;
    }
    return TwoSum(5,6);
}
console.log(ThreeSum(7));