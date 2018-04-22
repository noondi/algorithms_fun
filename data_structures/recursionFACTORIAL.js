// Factorial(!)
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120 
function factorial(num){
    // base case
    if (num === 1 ){
        return num;
    } else {
        // recursion case
        // the function that calls itself -  hence RECURSION
        // it will continue to call itself until the base case is satisfied
        return num * factorial(num -1);
    }
}
factorial(5);
