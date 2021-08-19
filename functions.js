function add(a,b)
{
	return a+b;
}

var sumofAdd=add(5,6)
console.log(sumofAdd)



var arr=[1,2,3,4,5],sum=0;
function sumOfAll()
{
	for(let i=0; i<5; i++)
	{
		sum=sum+arr[i];
	}
	return sum;
}

var grandSum=sumOfAll()
console.log(grandSum)