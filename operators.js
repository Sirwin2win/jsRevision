/*
OPerators are used to carry out operation on variables
1. Arithmetic +,-,*,**,/,%
2. Assignment =, +=,-=,*=,/=,**=,%=
3. Comparison ==,===,>,<,>=,<=
4. Logical ||,&&
*/
// 1. Arithmetic +,-,*,**,/,%
let x = 4
let y = 5
console.log(x+y)
console.log(x-y)
console.log(x)
console.log(x**2)
console.log(x%2)
// 2. Assignment =, +=,-=,*=,/=,**=,%=
let a = 3
let b = 4
console.log(a +=5) // a = a +5
console.log(a)
console.log(a -= 3)
console.log(b += a)
console.log(b)
// 3. Comparison ==,===,>,<,>=,<=, !=
let i = 4
let j = "4"
let k = 5
console.log(typeof j)
console.log(typeof i)
console.log(i===j)
console.log(i+j)
console.log(i<k || i==k || i==j)
// 4. Logical ||, &&
console.log(i>k && k>j)
const {email, name, phone,password} = req.body
 if(!email || !phone || !password || !name){
cxvnxcm,mvmcx
}else{
    res.json({message:"All fields must be filled"})
}
