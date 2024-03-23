// Array Methods


// Array length:- this method returns array length
// let arr = ['Hema','Gudu','Priya'];
// console.log(arr.length);


// Array toString():-this method converts array to string
// let arr = ['Hema','Gudu','Priya'];
// console.log(arr.toString());


// Array at():- this method return name of that index
// let arr = ['Hema','Gudu','Priya'];
// console.log(arr.at(1));


// Array join():- this method returns all elements into string
// let arr = ['Hema','Gudu','Priya'];
// console.log(arr.join(" "));


// Array pop():-this method removes the last element in the array
// let arr = ['Hema','Gudu','Priya'];
// console.log("deleted element:-",arr.pop());
// console.log(arr);


// Array push():- this method is add element in the last of array
// let arr = ['Hema','Gudu','Priya'];
// arr.push("dot");
// console.log(arr);


// Array shift():- this method removes first element in the array
// let arr = ['Hema','Gudu','Priya'];
// console.log(arr.shift());
// console.log(arr);

// Array unshift():- this method adds first element in the array
// let arr = ['Hema','Gudu','Priya'];
// arr.unshift("dot");
// console.log(arr);

// Array delete():-this method removes the element of aaray at any index
// let arr = ['Hema','Gudu','Priya'];
// delete arr[1];
// console.log(arr);


// Array concat():- this method concate two arrays
// let arr1 = ['Hema'];
// let arr2 = ['Priya'];
// let arr = arr1.concat(arr2);
// console.log(arr);


// Array flat():-Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
// let arr = [1,2,[3,4],[5,6]];
// console.log(arr.flat());


// Array splice():-this method is used when new elements add into array
// let arr =['Hema', 'Gudu'];
// arr.splice(1, 0, "dot");
// console.log(arr);


// Array slice():-this method creates new array and original array does not modified
let arr =[ 'Hema','dot','priya','pooja'];
let arr1 = arr.slice(1,3);
console.log(arr1);