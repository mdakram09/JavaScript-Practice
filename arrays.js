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