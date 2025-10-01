// Array of arrays
const child = [
    ["Ade",18,'ade@gmail.com'],
    ["Uche",19,'uche@gmail.com'],
    ["Ola",18,'ola@gmail.com'],
]
// using a while loop
let i = 0
while(i<child.length){
    // console.log(child[i])
    let j = 0
    while(j<child[i].length){
        console.log(child[i][j])
        j++
    }
    i++
}

// Array of objects
const students = [
    {id:1,name:"Peter Doe", email:'peterdoe@gmail.com'},
    {id:2,name:"Joel Doe", email:'joeldoe@gmail.com'},
    {id:3,name:"Mary Doe", email:'marydoe@gmail.com'},
]
// Looping using a while loop
let l = 0
while(l<students.length){
    // console.log(students[l])
    // Looping through the objects using a for in loop
    for(let m in students[l]){
        console.log(`${m}:${students[l][m]}`)
    }
    l++
}

const fruits = ["Apple", "Cherry", "Orange","Banana"]
// Looping through the fruits array using the for of loop
for(let demo of fruits){
    console.log(demo)
}
