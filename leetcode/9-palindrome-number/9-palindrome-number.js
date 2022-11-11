/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let reverseX = x.toString().split('').reverse().join('')

     if(x < 0) {return false}
     
     if(reverseX == x){
         return true 
     } else {
         return false
     }
};