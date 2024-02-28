const greetings = [
  'Hello',
  'Bonjour',
  'Hola',
  'Ciao',
  'Namaste',
] // Array

greetings[4] // Namaste


const greetingsObj = {
  english: 'Hello',
  french: 'Bonjour',
  spanish: 'Hola',
  italian: 'Ciao',
  hindi: 'Namaste',
} // Object

greetingsObj.hindi // Namaste


//const person = ['John', 'Smith', 36] // Bad use of an array

const fruits = ['apple', 'banana', 'orange']

const fruit1 = {
  fruit1: 'apple',
  fruit2: 'banana',
  fruit3: 'orange'
}

const person = {
  firstname: 'John',
  lastname: 'Smith',
  age: 36
} // Good use of objects

// console.log(person[0])


// Map
const birds = [
  { species: 'Robin', color: 'red', size: 'small', habitat: 'forest' },
  { species: 'Eagle', color: 'brown', size: 'medium', habitat: 'mountains' },
  { species: 'Parrot', color: 'green', size: 'small', habitat: 'forest' },
  { species: 'Penguin', color: 'black and white', size: 'medium', habitat: 'Antartica' },
  { species: 'Owl', color: 'grey', size: 'medium', habitat: 'forest' }
]

const birdNames = birds.map(bird => bird.species) // Creates a new array

console.log(birdNames)

// Filter
const students = [
  { firstname: 'Alice', age: 20 },
  { firstname: 'John', age: 15 },
  { firstname: 'Jose', age: 25 },
  { firstname: 'Maria', age: 17 },
  { firstname: 'Joe', age: 30 }
]

const adults = students.filter(student => student.age >= 20)
console.log(adults)


// Shallow Copy
const originalArray = [1, 2, 3, {firstname: 'John', lastname: 'Smith'}]
const duplicateArray = [...originalArray]

originalArray[3].lastname = 'Doe'
originalArray[0] = 20
duplicateArray[0] = 5
duplicateArray[3].firstname = 'Joe'

console.log('Original Array: ', originalArray)
console.log('Duplicate Array: ',duplicateArray)


// Deep Copy
const originalArr = [1, 2, 3, {firstname: 'John', lastname: 'Smith'}]
const duplicateArr = JSON.parse(JSON.stringify(originalArr))

originalArr[0] = 10
duplicateArr[3].firstname = 'Joe'

console.log(originalArr)
console.log(duplicateArr)


const originalObj = { x: 1, y: { a: 'A', b: 'B' }}
const duplicateObj = JSON.parse(JSON.stringify(originalObj))

originalObj.x = 10
duplicateObj.y.a = 'Z'

console.log(originalObj)
console.log(duplicateObj)

// Find - Searches for the first match

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 999 },
  { id: 3, name: 'Tablet', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
  { id: 4, name: 'Smartwatch', price: 999 },
]

const productToFind = 2
const product = products.find(product => product.id === productToFind)
console.log(product)

// Reduce

const orders = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 399 },
  { id: 3, name: 'Tablet', price: 599 },
  { id: 4, name: 'Watch', price: 199 }
]

const totalPrice = orders.reduce((total, order) => total + order.price, 0)
// total = 2196
console.log(totalPrice)


// forEach
const messages = [
  { id: 1, sender: 'Alicia', content: 'Hello!' },
  { id: 2, sender: 'Samantha', content: 'Hi Alicia!' },
  { id: 3, sender: 'Alicia', content: 'Hi Sammy!' },
  { id: 4, sender: 'Samantha', content: 'Hi Ali!' },
]

messages.forEach(message => {
  console.log(`${message.id} - ${message.sender} says "${message.content}"`)
}) // this does not create an array


// Object.values
const grades = {
  math: 90,
  english: 85,
  science: 95,
  history: 81,
}

const gradesArr = Object.values(grades) // [ 90, 85, 95, 81 ]

const averageGrade = (arr) => {
  const sum = arr.reduce((total, grade) => total + grade, 0)
  return sum / arr.length
}

console.log(averageGrade(gradesArr)) // 87.75