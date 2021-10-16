const square=function(num){
    return num*num;
}

const myArr=[2,5,4,6,7,8]
for(let i=0; i<myArr.length; i++)
{
    var result = square(myArr[i]);
    console.log(result)
}

/* using arrow function */

const squareArrow=(n)=>{
    return n*n;
}

for(let i=0; i<myArr.length; i++)
{
    var result = squareArrow(myArr[i])
    console.log(result)
}


const maxOfThree=(x,y,z)=>{
    if(x>y && x>z)
    {
        console.log(`${x} is the greatest number`)
    }
    else if(y>z)
    {
        console.log(`${y} is the greatest number`)
    }
    else{
        console.log(`${z} is the greatest number`)
    }
}

const result2=maxOfThree(2,4,1)
console.log(result2)

