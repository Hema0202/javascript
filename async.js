// console.log('task1 done');

const { reject } = require("async");

// console.log('task2 done');

// function handlerFun(){
//     console.log('task3 done');
// }

// setTimeout(handlerFun,3000);

// console.log('task4 done');

// console.log("task5 done");

// // callbacks
// function getdata1(
//         function (err, 
//             function(err, 
//                 function(err,
//                     function(err, 
//                         function(err, 
//                             function(err, 
//                                 function (err, done()))))))){
    
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     )



//callback hell

//Promise: a Promise is an object that will produce a single value some time in the future.
//If the promise is successful, it will produce a resolved value,
// but if something goes wrong then it will produce a reason why the promise failed. 

//States:
//pending
//fullfilled
//rejected

let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('promise1 done');
        // resolve("value 1");
        // reject(new Error('Something went wrong with promise1'));
    }, 3000)
})

let promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        // resolve("value2");
        reject(new Error ("promise 2 rejected"));
    }, 4000)
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('promise 3 done')
    //    resolve('value 3');
    //    reject(new Error('promise 3 rejected')); 
    }, 2000);
})