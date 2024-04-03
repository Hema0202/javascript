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

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('promise1 done');
//         resolve("value 1");
//         // reject(new Error('Something went wrong with promise1'));
//     }, 3000)
// })

// let promise2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         // resolve("value2");
//         reject(new Error ("promise 2 rejected"));
//     }, 4000)
// })

// let promise3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('promise 3 done')
//        resolve('value 3');
//     //    reject(new Error('promise 3 rejected')); 
//     }, 2000);
// })

// promise1.then(function (data){
//     console.log(data);
// }).catch(function (err){
//     console.log(err.message);
// })

// promise2.then(function (data){
//     console.log(data);
// })

// promise3.then((data)=>{
//     console.log(data);
// })


// promise1.then((data)=>{
//     console.log(data);
//     let promise2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("value 2");
//         }, 4000)
//     })
//     return promise2;
// }).then((data)=>{
//     console.log(data);
//     let promise3 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("value 3");
//         }, 2000)
//     })
//     return promise3;
// }).then((data)=>{
//     console.log(data);
// })

// let promises = Promise.all([promise1, promise2, promise3]);

// promises.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message)
// })

// let promises = Promise.allSettled([promise1, promise2, promise3]);

// promises.then((data)=>{
//     console.log(data);
// })

// let promises = Promise.any([promise1, promise2, promise3]);

// promises.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message);
// })

// let promises = Promise.race([promise1, promise2, promise3]);

// promises.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message);
// }).finally(()=>{
//     console.log('promises done');
// })


// async await 

// async function getSum(a,b){
//     return a+b;
// }
// let res = getSum(5,6);

// res.then((data)=>{
//     console.log(`sum: ${data}`);
// })

// async function print(){
//     let res = await getSum(5,6);
//     console.log(res);
// }

// print();


function googleServer(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Google data');
        }, 2000)
    })
}

function amazonServer(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve('Amazone data');
            reject(new Error('amazon server crashed'));
        }, 4000)
    })
}

function flipkartServer(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Flipkart data');
        }, 3000);
    })
}

function awsServer(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('AWS data');
        }, 2000);
    })
}

function mongooseServer(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('MongoDB data');
        }, 5000);
    })
}

async function getData(req, res){
    try {
        console.log('Fetching data from google.com...');
        let googleData = await googleServer('/google.com');
        console.log('Data from google :',googleData + '\n')

        try {
            console.log('Fetching data from amazon.com...');
            let amazonData = await amazonServer('/amazon.com');
            console.log('Data from amazon:',amazonData+'\n');
        } catch (err) {
            console.log(err.message,'\n');
        }

        console.log('Fetching data from flipkart.com...');
        let flipkartData = await flipkartServer('/flipkart.com');
        console.log('Data from flipkart :',flipkartData + '\n ');

        console.log('Fetching data from aws.com');
        let awsData = await awsServer('aws.com');
        console.log('data from aws :',awsData);
    } catch (error) {
        console.log(err.message);
    }
}

getData();