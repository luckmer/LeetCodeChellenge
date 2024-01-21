// Your task is to implement the function strstr. The function takes two strings as arguments (s,x) and  locates the occurrence of the string x in the string s. The function returns an integer denoting the first occurrence of the string x in s (0 based indexing).
// Note: You are not allowed to use inbuilt function.
// Example 1:
// Input:
// s = GeeksForGeeks, x = Fr
// Output: -1
// Explanation: Fr is not present in the
// string GeeksForGeeks as substring.
// Example 2:
// Input:
// s = GeeksForGeeks, x = For
// Output: 5
// Explanation: For is present as substring
// in GeeksForGeeks from index 5 (0 based
// indexing).
// Your Task:
// You don't have to take any input. Just complete the strstr() function which takes two strings str, target as an input parameter. The function returns -1 if no match if found else it returns an integer denoting the first occurrence of the x in the string s.
// Expected Time Complexity: O(|s|*|x|)
// Expected Auxiliary Space: O(1)
// Note : Try to solve the question in constant space complexity.
// Constraints:
// 1 <= |s|,|x| <= 100

class Solution {
  strstr(s, x) {
    for (let i = 0; i < s.length - x.length + 1; i++) {
      if (s.substring(i, i + x.length) === x) {
        return i;
      }
    }
    return -1;
  }
}
