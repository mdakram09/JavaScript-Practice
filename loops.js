// while loop

var i=1;
while(i<=100)
{
	console.log(i)
	i++
}

// for loop
// Table of 2

var n=2;
for(var j=1; j<=10; j++)
{
	console.log(2*j)
}


// for in loop

var person={
	name : 'Md Akram Khan',
	subject : 'CSE',
	'address' : 'Kolkata',
}


for(let key in person)
{
	console.log(key)
}