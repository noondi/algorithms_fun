// Exponential runtime
// Big O notation: O (n^2)

function addAndPrintAll(array){
    for (var i = 0; i<array.length; i++) {
        for (var j = 0; j < array.length; j++){
            console.log(array[i] + array[j]);
        }
        
    }   
}
// with small input you will not notice much differences
// with a bigger inputs your program could freeze 
// this consumes much resources and is not good practice
addAndPrintAll(["A", "B", "C"]); // 9 pairs are printed out
addAndPrintAll(["A", "B", "C", "D"]); // 16 pairs are printed out
addAndPrintAll(["A", "B", "C", "D", "E"]); // 25 pairs are printed out