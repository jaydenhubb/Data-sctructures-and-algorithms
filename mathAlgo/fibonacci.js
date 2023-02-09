// Given a number "n", find the first "n" elements of the fibonacci sequence

// Note: fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. The first twoo numbers are 0 and 1

// Problem:Given a number "n", find the first "n" elements of the fibonacci sequence
function fibo(n){
    const fib= [0, 1]
    for(let i =2; i<n; i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

// fibo(2) = [0, 1]
// fibo(3) = [0, 1, 1]
// fibon(7) = [0, 1, 1, 2, 3, 5, 8]

// Big-O = O(n) Time complexity:  This is because as the input value increases, 
// the number of time line 9 will execute also inceases.