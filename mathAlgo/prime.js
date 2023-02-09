// Given a natural number "n" determine if the number is prime or not

function prime(n){
    if(n<2){
        return false
    }
    for(let i =2; i<n; i++){
        if(n%i===0){
            return "Not a prime"
        }
    }
    return "Prime"
}

console.log(prime(33));

// Big-O = O(n): Linear time complexty:  As the value of n increases, the number of times line 8 executes increases