// recursion is a problem solvin technique where the solution depends on the solutions to smaller instances of the same problem
// Recursion is  when a function calls itself
// Note==>{
    // Every recursion solution needs to have a base case- a condition to terminaete the recursion
    // Recursion might simplify solving a problem but it does not alwys translate to a faster solution. A recursive solution may be far worse than an iterative solution
// }
// Recursion Fibonacci
// Problem 1 - Give a number "n", find the nth element of the fibonacci sequence

function fibonaccinum(n){
    if(n<2){
        return n
    }
    return fibonaccinum(n-1) + fibonaccinum(n-2)

}

console.log(fibonaccinum(9)); //34 
// Recursion is not a good solution to the fibonacci sequence the time complexity is O(2^n)compared to the terative solution
