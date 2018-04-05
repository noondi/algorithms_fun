// Linear runtime
// Big O notation: O (n)

function printAll(array){
    for (var i = 0; i<array.length; i++) {
        console.log(array[i]);
    }   
}
// no matter how big the input size, 
//we have to do an operation at every single element.
// the runtime is proportion to the input, 
// O represents the function
// n represents the number of elements/size of input
printAll([1, 2, 3, 4]); 
printAll([1, 2, 3, 4, 5, 6, 7, 8]);
printAll([1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15]);