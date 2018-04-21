function factorial(num){
    // base case
    if (num === 1 ){
        return num;
    } else {
        // the function that calls itself -  hence RECURSION
        // it will continue to call itself until the base is satisfied
        return num * factorial(num -1);
    }
}
factorial(4);