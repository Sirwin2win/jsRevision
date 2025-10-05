const path = require('path')
/*
Function is a block of code that is defined once and invoked(called) any amount of times.
Parameters are local variables used to define a function while arguements are vlaues assigned 
to the parameters at the point of function call
*/
const square = function(n){
    return n**2
}
console.log(square(5))
console.log(square(6))
// A Greet function 
const greet = function(){
    console.log("Good Evening")
}
greet()
// A function that runs a conditional statement
const even = function(n){
    if(n%2==0){
        return `${n} is an even number`
    }else{
        return `${n} is an odd number`
    }
}
console.log(even(3))
console.log(even(100))
// A function that has a loop
const add = function(a){
    let result = 0
    for(let i = 0; i<a.length; i++){
        result +=a[i]
    }
    return result;
}
const arr = [1,2,3,4,5,6,7]
console.log(add(arr))
// A function that has a function inside
const outer = function(r){
    let pi = 3.14;
    let circle = function(){
        return pi*r**2;
    }
    return circle()
}
console.log(outer(2))
console.log(3.14*4)
// A function that receives a function as a parameter
const higher = function(x,y,res){
  return res(x,y)
}
const multiply = function(a,b){
    return a*b
}
console.log(higher(4,5,multiply))// multiplies
const plus = function(i,j){
    return i+j
}
console.log(higher(4,5,plus))// add
// A recursive function; a function that makes a call to itself
const fact =function(n){
    if(n<=0){
        return 1
    }else{
        return n*fact(n-1)
    }
}
console.log(fact(3))
console.log(fact(4))
// A function with a default parameter
const city = function(location="Kubwa, Abuja"){
    return `I live in ${location}`;
}
console.log(city("Lugbe, Abuja"))
console.log(city())
// JavaScript useful string methods
// split() for converting strings into arrays
const info = "I am a web developer"
const arr2 = info.split(" ")
console.log(arr2)
console.log(__dirname)
const imagePath = path.join(__dirname,"images/bag1.avif")
console.log(imagePath)
const bag = imagePath.split("\\")
console.log(bag[bag.length-1])
// Javascript Objects 
console.log(info.toUpperCase())
const car = {
    name:"Toyota",
    year:2025,
    color:"red"
}
console.log(car)
console.log(car.name)
console.log(car["name"])
car.name = "Honda"
console.log(car)
// Adding a new key to an object
car["engNo"] = "TY65473"
console.log(car.engNo)
// looping through an object using a for in loop
for(let demo in car){
    console.log(`${demo} : ${car[demo]}`)
}
// Adding a function key to the object
car["details"] = function(){
    return `This ${this.name} has a ${this.color} color, and was produced in ${this.year}`
}
console.log(car.details())
// Objects using function constructor
function Parent(name,email,phone){
    this.name = name
    this.email = email
    this.phone = phone
    this.details = function(){
        return `My name is ${this.name}, you can email me on ${this.email}`
    }
    this.bloodGroup = function(bg){
        return `My blood group is ${bg}`
    }
}
const ike = new Parent("Peter Doe","peterdoe@gmail.com",651416666666718)
console.log(ike)
console.log(ike.details())
const ibe = new Parent("Ibegbulam Ogbonna","ibeogb@gmail.com",7894732857834)
console.log(ibe.details())
console.log(ibe.bloodGroup('O+'))
// console.log(car)


