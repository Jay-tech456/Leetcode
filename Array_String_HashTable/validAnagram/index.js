// Manjeh Prasad 
// Feb 7, 2024


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // take both the string, convert it into a character array
    // sort the character array, then join all the elements together
    let strS = s.split('').sort().join('')
    let strT = t.split('').sort().join('')
    return strS === strT


 // Space Complexity O(1)
// time complexity O(n) 
    
};
