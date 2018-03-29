function print1to255() {
var arr = [];
  for (var i = 1; i < 256; i++) {
    console.log(i);
  }
}
print1to255();


function print0to255Sum() {
var sum = 0;
  for (var i = 0; i < 256; i++) {
    sum+=i;    
    console.log(i);
    console.log(sum);
  }
}
print0to255Sum();


function findAndPrintMax() 
{
  var arr = [12, 13, 5, 45, 7, 8];
  var max = arr[0];
    for (var i = 1; i < arr.length; i++)
    {
      if(max < arr[i]) 
      {
        max = arr[i];
      } 
    }
  console.log(max);
}
findAndPrintMax();

function returnArrayCountGreaterthanY() {
var arr = [10, 11, 17, 3, 9, 15];
var count = 0;
var Y = 5;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > Y) {
			count++;
          
		}
	}
  console.log(count);
  return arr;
}
returnArrayCountGreaterthanY();


function returnArrayCountGreaterthanY() {
var arr = [10, 11, 17, 3, 9, 15];
var count = 0;
var Y = 5;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
          
    }
  }
  console.log(count);
  return arr;
}
returnArrayCountGreaterthanY();

//Analyze an array's values and print the average
var myArray = [];
function printAverage (arr) {
	var Sum = 0;
	var Avrg = 0;
	for (var i = 0; arr.length; i++) {
		Sum = arr[i] + arr[i+1];
		Avrg = Sum / arr.length;
		console.log(Avrg);
	}
}

//Given an array, move all values forward (to the left) by one index, dropping
//the first value and leaving a 0 (zero) at the of the array
var myArray = [];
function shiftArrayValsLeft(arr) {
	var arr = [];
	for (var i = 0; i < arr.length; i++)
		arr[i] = arr[i-1];
		arr[arr.length-1] = 0;
		console.log(arr);
}

//Return the given array, after setting any negative values to zero.
var myArray = [];
function ZeroOutNegativeNumbers(arr) {
	var arr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
			console.log(i);
		}
	}
}