// << -> left-shift operator:

// let x = 5;
// let res = x<<1; //left shift by one bit, so the value of 'x' becomes 10 (binary:101)
// console.log(res);     //output:10
 
//for ex:- 
// 0000 0101
// 0000 1010

// 0000 0101 //2 shift
// 0001 0100


// >> -> right-shift operator

// let x=5;
// let res = x>>1; // right shift by one bit, so the value of 'x' becomes 2 (decimal:101 ->101 -> 10)
// console.log(res); //output:2

//0000 0101
//0000 0010 


//negative value
// let x = -5;
// let res = x>>1;
// console.log(res); // output = -3;

// 5  -> 0 000 0101 //first 0 bit shows signed value which is positive
// -5 -> 1 111 1011

// 4  -> 0 000 0100
//    -> 1 111 1011 //1's complement
//       0 000 0001 //add 1 so become 2's complement
// -----------------
// -4 -> 1 111 1100
// 1 111 1110
// 1 111 1101
// 0 000 0010

// We can use it in place of parseInt when dividing by 2
// For example, instead of writing:
//    let c = parseInt(a/2);
// we can write:
//    let c = a>>1;


// >>> -> unsigned-right-shift operator
// The "unsigned right shift" operator is similat to the "right shift" operator, but it treats the number as unsigned.
// The ">>>" operator performs an unsigned right shift. THis means that shifting a negative number always results in positive numbers.

// 5 -> 0101
// 2 -> 0010
// 0 -> 0000
// -1-> 1111 -> 1 in 2's compliment

// 0 000 0001->1
// 1 000 0001-> -1 -> normal
// 1 111 1110-> -1 -> 1's compliment
// 1 111 1111-> -1 -> 2's compliment 

// let x = -5;
// let res = x>>>1;
// console.log(res); //very large number
// output :-2147483645

// 5 -> 0 000 0101
// -5-> 1 111 1011
// after shift -> 0 111 1101

// <<= -> x = x<<1 -> x <<=1
// >>= -> x = x>>1 -> x >>=1
// >>>= -> x = x>>>1 -> x>>>=1 (unsigned)


// ?? -> Nullish coalecing operator -> mostly used to set default value
//It returns the first operand if it is not null or undefined, otherwise it returns the second operand.

// let x= null;
// let res = x ?? 3;
// console.log(res); //prints 3 because x is null

// let y = false;
// let res = y ?? 3;
// console.log(res); //prints false because y is not null or undefined


// ??= -> x = x ?? 3 -> x ??= 3


// ?.Optional chaining operator 
// If the left hand side object does not exist then it will return undefined else it will go on checking for the right property till it finds

// let obj = database.getData('url');

// console.log(obj?.a);



//~
//bitwise NOT operation on a number flips all its bits i.e., converts positive numbers into negative and vice versa.

// let x = 5;
// let res = ~x;
// console.log(res); //-6

// let x = 5.5;
// let res = ~~x;
// console.log(res);

// let x = -3;
// let res = ~x;
// console.log(res);

// 0 000 0101 -->+5
// 1 111 1010 -->1's complement
// 1 111 1011 -->2's complement-->-5

// 0 000 0100 -->4


// 0 000 0100 -->+4
// 1 111 1011 -->1's complement
// 1 111 1100 -->2's complement

// 0 000 0011 -->3


// 0 000 0011 -->+3
// 1 111 1100 -->1's complement
// 1 111 1101 -->2's complement

// 0 000 0010 -->2


// 0 000 1100 -->12
// 1 111 0011 -->1's complement
// 1 111 0100 -->2's complement

// 0 000 1011 -->11

//?. operation chaining
//>>right shift
//<<left shift
//>>>nullish right shift it is not evaluates signed value  



//instanceof 

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Car extends Person{
    constructor(model, color){
        super(color, '20');
        this.model = model;
        this.color = color ?? 'white';
        //if(color == undefined) this.color = 'white';
        //else this.color = color;
    }
}

// let car = new Car(4);

// console.log('model:', car.model, 'color:', car.color)

let x = new Person(null, 28);

let y = new Car(10, "red");


console.log(y instanceof Person);//true
console.log(x instanceof Person);//true
