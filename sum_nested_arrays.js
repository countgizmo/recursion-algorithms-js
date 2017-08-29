/* The function sums up all the integers in array.
 * It supports nested array thus providing a good
 * excercise for creating a recursive function.
*/
function sum(arr, ind, result)
{
	if (ind == arr.length) {
		return result;
	}
  
  if (Array.isArray(arr[ind])) {
    result += sum(arr[ind], 0, 0);
  } else {
  	result += arr[ind];
  }
  
	return sum(arr, ind+1, result);
}

// Testing
const arr = [1, 2, [3,4], 3, 4, [5, 6, 1], 2];
const expected = 31;
const actual = sum(arr, 0, 0);

console.log("Result: " + actual);
console.log("Check: " + (expected === actual));
