let marks=[76,82,84,85,86];
const fruits=['Apple', 'Banana','Orange'];

console.log(marks)
console.log(fruits)

marks.push(90)
fruits.push('Pineapple')

console.log(marks)
console.log(fruits)

marks.shift()
marks.unshift(95)

fruits.shift()
fruits.unshift('Mango')

console.log(marks)
console.log(fruits)

fruits.reverse()
marks.reverse()

console.log(marks)
console.log(fruits)


let marks1=[57,76,87,45,67];
let marks2=[56,45,78,97,67]
let marks3=marks1.concat(marks2)
console.log(marks3)

console.log(marks.indexOf(84))
console.log(marks[2])

console.log(Array.isArray('marks'))
console.log(typeof marks)