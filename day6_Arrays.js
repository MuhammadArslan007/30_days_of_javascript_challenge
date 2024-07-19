//Task/Activities
//Activity1 Creat Arrays and Element Access
const arr = [1,2,3,4,5]
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length-1]); //or 4

//Activity2 Arrays Basic method
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(1)
console.log(arr);

//Activity3 Intermediate Arrays Method
const doubleArr = arr.map(num => num*2)
console.log(doubleArr);

const evenNumArr = arr.filter(num => {if (num%2===0) return num;})
console.log(evenNumArr);

const sumOfArr = arr.reduce((acc, num) => acc+= num)
console.log(sumOfArr)

//Activity4 Array Iteration
for(let start =0; start< arr.length; start++){
    console.log(arr[start]);
}


arr.forEach(element => {
    console.log(element);
});

//Activity5 Multi-Dimensional Arrays
const multiDimArr = [[1,2],[1,2,30],[1,2]]
console.log(multiDimArr);

console.log(multiDimArr[1][2]);