'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
let tableau = string.split(' ');

for(let i= 0; i < tableau.length; i++){
    let word = tableau[i].split('');
    word[0] = word[0].toUpperCase();
    tableau[i] = word.join('');
}
    return tableau.join(' ')

};
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function') 
assert.strictEqual(jadenCase("je code a la wild"),"Je Code A La Wild")
// assert.fail('You must write your own tests')
// End of tests */
