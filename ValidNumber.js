// A valid number can be split up into these components (in order):

// A decimal number or an integer.
// (Optional) An 'e' or 'E', followed by an integer.
// A decimal number can be split up into these components (in order):

// (Optional) A sign character (either '+' or '-').
// One of the following formats:
// At least one digit, followed by a dot '.'.
// At least one digit, followed by a dot '.', followed by at least one digit.
// A dot '.', followed by at least one digit.
// An integer can be split up into these components (in order):

// (Optional) A sign character (either '+' or '-').
// At least one digit.
// For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

// Given a string s, return true if s is a valid number.

 

// Example 1:

// Input: s = "0"
// Output: true
// Example 2:

// Input: s = "e"
// Output: false
// Example 3:

// Input: s = "."
// Output: false
// Example 4:

// Input: s = ".1"
// Output: true


const isNumber = (s) => { 

   return (! isNaN(s) ) && (s.trim() !== "" && s != "Infinity" && s != "-Infinity"  && s != "+Infinity")

};
