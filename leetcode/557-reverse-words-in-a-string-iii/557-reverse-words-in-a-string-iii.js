/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = s.split(' ').map(function(item){
        return item.split('').reverse().join('')
    })
    return result.join(' ')
};