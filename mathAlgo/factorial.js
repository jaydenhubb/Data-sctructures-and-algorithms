// Given a integer "n" find the factorial of that integer
// The factorial of a non-negative integer "n" denoted n! is the product of all positive integers less than or equal to "n"

function factorial(n){
    let m = 1
    for(let i=2; i<=n; i++){
        m*=i
    }
    return m
}

console.log(factorial(4));

// Big-O = O(n): 