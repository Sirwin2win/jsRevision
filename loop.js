/*
Loop is used to iterate an array as long as a condition is true
1. for loop
2. while loop
3. do while loop
4. for of loop
5. for in loop
6. forEach(), map(), filter(), find(), findIndex()
for(initialization, condition, incremet/decrement){
  loop body
}
*/
const num = [1,2,3,4,5,6,7]
console.log(num[0])
let container = 0
for(let i = 0; i<num.length; i+=1){
    container += num[i]
}
console.log(container)
// const num = [1,2,3,4,5,6,7]
let can = ""
for(let i = num.length-1; i>=0;i--){
    can +=num[i]
}
console.log(can)
const students = [
    {id:1,name:"Peter Doe", email:'peterdoe@gmail.com'},
    {id:2,name:"Joel Doe", email:'joeldoe@gmail.com'},
    {id:3,name:"Mary Doe", email:'marydoe@gmail.com'},
]
console.log(students[0].email)
for(let i = 0; i<students.length;i++){
    // console.log(students[i].name.toUpperCase())
    for(let j in students[i]){
        console.log(`The key is ${j} while the value is ${students[i][j]}`)
    }
}
const name = "John Doe"
console.log(name[5])
let res = ''
for(let i = name.length-1; i>=0;i--){
    res +=name[i]
}
console.log(res)

/*
const students[0] = {id:1,name:"Peter Doe", email:'peterdoe@gmail.com'},
const students[1] = {id:2,name:"Joel Doe", email:'joeldoe@gmail.com'},
const students[2] =  {id:3,name:"Mary Doe", email:'marydoe@gmail.com'},

initialization
while(condition){
  loop body
  increment/ decrement
}

*/
const people = ["Ade", "Uche","Ola","Tobi"]
let k = 0
while(k<people.length){
    console.log(people[k].toUpperCase())
    k+=1
}
