// const profile = {
//     userName: "sobaan",
//     isFollow:true,
//     followers: 234,
//     following:2342,

// };
// console.log(typeof profile ["userName"]);

// Arithmatic operators

// let a = 5;
// let b = 2;

// console.log("a =", a,  "& b =",b)
// console.log("a+b =", a+b )
// console.log("a-b =", a-b )
// console.log("a*b =", a*b )
// console.log("a/b =", a/b )
// console.log("a**b=", a**b)

//Unary operators
// console.log("a++b=", a++ )answer:5 increament first then print to next line
// console.log(a) answer:6
// console.log("a++b=",++a) answer:6 because this is post increamnet print first

//Assignment operators

// let a = 5;
// let b = 2;

// a += 4; // a=a+4  (A=5 5+4=9)answer:9
// a -= 4; minus equalto
// a %= 4; modulus equal
// a **= 4; exponentiation equal

// console.log("a =", a)

//Comparison Operators

// let a = 5;
// let b = 3;
// console.log("a =",a, "& b =",b )
// console.log("a == b", a == b)
// console.log("a != b", a != b)
// console.log("a === b", a === b)
// console.log("a !== b", a !== b)
// console.log("a > b", a > b)
// console.log("a < b", a < b)
// console.log("a >= b", a >= b)
// console.log("a <= b", a <= b)

//Logical operators (Logical AND operators)

// let a = 5;
// let b = 5;
//  console.log(a > b && a===b) first way to declare

// let cond1 = a < b;
// let cond2 = a ===b;

// console.log( cond1 && cond2) 2nd way to decalre a variable

//(Logical OR operators)

// console.log(a > b || a===b) first way to declare

//Logical NOT 

// console.log(a > b ! a===b) first way to declare



// Question solve

// let num = prompt("Enter a Number:");

// if(num%5===0){
//     console.log(num, "is a multiple of 5");
// }
// else{
//     console.log(num, "Not a multiple of 5")
// }

let score = prompt("Enter your Score(0-100)");
if(score >= 90 && score <= 100){
    console.log("Grade A");
}
else if(score >= 70 && score <=89){
    console.log("Grade B");
}
else if(score >= 60 && score <=69){
    console.log("Grade C");
}
else if(score >= 50 && score <=59){
    console.log("Grade D");
}
else if(score >= 0 && score <=49){
    console.log("Grade E");
}
else{
    console.log("Failed")
}


