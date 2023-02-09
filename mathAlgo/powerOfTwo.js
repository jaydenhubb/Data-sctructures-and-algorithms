// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2 !==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// } 

// console.log(isPowerOfTwo(1)) //true
// console.log(isPowerOfTwo(2)) //true
// console.log(isPowerOfTwo(5)) //false
// console.log(isPowerOfTwo(8)) //true

// Big-O = O(logn): i.e logarithmic



// a better solution to make it a constant time complexity is to use the below called bitwise operation


function isPowerOfTwoBitwise(n){
    if(n<1){
        return false
    }
    return (n & (n-1))===0
}

console.log(isPowerOfTwoBitwise(1)) //true
console.log(isPowerOfTwoBitwise(2))  //true
console.log(isPowerOfTwoBitwise(5)) //false
console.log(isPowerOfTwoBitwise(8)) //true