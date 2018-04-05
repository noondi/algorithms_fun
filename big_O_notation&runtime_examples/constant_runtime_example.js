// Constant runtime
// Big O notation: O (1)

function print(array){
    console.log(array[0]);
    console.log(array[1]);
}
// no matter how big the input size, 
//this will always log the first 2 elements.
print([1, 2, 3, 4]); 
print([1, 2, 3, 4, 5, 6, 7, 8]);
