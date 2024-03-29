// Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.
// Example 1:
// Input:
// 5
// 111 222 333 444 555
// Output:
// 1
// Explanation:
// A[0] = 111 //which is a palindrome number.
// A[1] = 222 //which is a palindrome number.
// A[2] = 333 //which is a palindrome number.
// A[3] = 444 //which is a palindrome number.
// A[4] = 555 //which is a palindrome number.
// As all numbers are palindrome so This will return 1.
// Example 2:

// Input:
// 3
// 121 131 20

// Output:
// 0

// Explanation:
// 20 is not a palindrome hence the output is 0.

// Constraints:
// 1 <=T<= 50
// 1 <=n<= 20
// 1 <=A[]<= 10000

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
  isPalindrome(num) {
    // Convert the number to a string and compare it with its reverse
    const numStr = num.toString();
    const reversedNumStr = numStr.split("").reverse().join("");
    return numStr === reversedNumStr;
  }

  PalinArray(arr, n) {
    for (let i of arr) {
      if (!this.isPalindrome(i)) {
        return 0;
      }
    }

    return 1;
    //code here
  }
}
