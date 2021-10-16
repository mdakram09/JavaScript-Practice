// const myArr=[]

// for(let i=0; i<5; i++)
// {
//     const temp=window.prompt('Please enter Array elements')
//     myArr.push(temp)
// }

// var max=myArr[0]

// myArr.forEach(
//     function(n)
//     {
//         if(myArr[n]>max)
//         {
//             max=myArr[n]
//         }
       
//     }
// )

// console.log(`${max} is the greatest`)
// console.log(myArr)

// const text=['hello','great','smash', 'ironman']

// const cap=text.map(
//     function(t){
//         return t.toUpperCase();
//     }
// )

// console.log(cap)
// console.log(text)


const movies=['Iron Man', 'Thor', 'Captain America', 'Spider Man']
const movie=movies.find(
    (m)=>{
        return m.includes('Captain')
    }
)
console.log(movie)


const nums=[2,4,6,9,2,1,0,5,6,7]
const num=nums.filter(
    (n)=>{
        return n>5
    }
)

console.log(num)

const odd=nums.filter(
    (n)=>{
        if(n%2!=0)
            return n
    }
)
console.log(odd)