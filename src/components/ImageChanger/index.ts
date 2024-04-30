function sum(a: number, b: number) {
	return a + b
}
console.log(sum(10, 20))

let num: number = 10
console.log('num', num)

const str: string = 'Muhammet'
console.log('str', str)

const checked: boolean = true
console.log('checked', checked)

// tuple
// in array can't be more than number and string you have to write it
const arrayFirst: [number, string] = [10, 'shi']
console.log('arrayFirst', arrayFirst)

// | - union
// || - or
// && - and

const array: Array<number | string> = [10,32,3232,3323, 'hi']
console.log('array', array)

// in any can be any type of data
let a: any = 9
a = true
a = 'Muhammet'

console.log('a', a)

// even you didn't write the type it is under the hood is "string"
let username = 'Muhammet'

// you can't change to another type data
// username = 38
console.log('username', username)



const greeting = (name: string) =>{
	return `Hello ${name}`
}


console.log('greeting',greeting("Muhammet"))


const obj = "shi"

console.log('obj',obj)