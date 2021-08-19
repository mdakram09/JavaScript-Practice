var students=[70,80,96,76,92]

console.log(students)

var i=0,sum=0;
while(i<students.length)
{

	sum=sum+students[i];
	i++;

}
var avgMarks=sum/students.length;

console.log(avgMarks)

console.log((70+80+96+76+92)/5)

console.log(students)

students.push(82)

console.log(students)

students.pop()

console.log(students)

students.unshift(80)

console.log(students)

students.shift()

console.log(students)

students.sort()

console.log(students)

students.reverse()

console.log(students)

var person={
	name : 'Md Akram Khan',
	subject : 'CSE',
	'address' : 'Kolkata',
}

console.log(person)
console.table(person)

console.log(person.name)
console.log(person['name'])

console.log(person['address'])
console.log(person.address)

// objects inside arrays

var sarr=[

{
	name : 'Md Akram Khan',
	subject : 'CSE',
	'address' : 'Kolkata',
},
{
	name : 'Md Akram Khan',
	subject : 'CSE',
	'address' : 'Kolkata',
},
{
	name : 'Md Akram Khan',
	subject : 'CSE',
	'address' : 'Kolkata',
}

]

console.log(sarr)
console.log(sarr[0].name)

// array inside an object

var person2={
	name : 'Md Akram Khan',
	subject : 'CSE',
	address : 'Kolkata',
	marks: [71,71,72,72,60,90,80]
}

console.log(person2.marks)
console.log(person2.marks[3])

// object inside a object

var person3={
	name : 'Md Akram Khan',
	subject : 'CSE',
	'address' : 'Kolkata',
	obj: {
		fathersName : 'Md Aslam Khan',
		mothersName:'Ammy'
	}
}

console.log(person3)

console.log(person3.obj)
console.log(person3.obj.fathersName)
