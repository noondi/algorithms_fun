// logarithmic runtime
// big O notation is: O (log n)

function binarySearch(array, key){
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high){
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key){
            low = mid + 1;

        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// with every operation we cut the input in half
// this goes until we zero down to the target element.