'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
function multiply(a, b) {
    let i = 0;
    let result = 0;
    if (a == 0 || b == 0) {
        return 0;
    } else if (a < 0 && b < 0) {
        while (i < -b) {
            result = result + a;
            i++;
        }
        result = -result;
        return result;
    } else if (a > 0 && b < 0) {
        while (i < a) {
            result = result + b;
            i++;
        }
        return result;
    } else if (a < 0 && b > 0) {
        while (i < b) {
            result = result + a;
            i++;
        }
        return result;
    } else {
        while (i < b) {
            result = result + a;
            i++;
        }
        return result;
    }
}

/* faire tt les cas de figures possibles :
 a = positif & b= positif if ( a > 0 && b > 0)
 a = negatif & b= negatif   if (a < 0 && b < 0)
 a= 0 & b=0    if (a == 0 || b == 0)
 a=positif et b=negatif ( a > 0 && b < 0)
 a=negatif et b=positif (a < 0 && b > 0)
 utiliser operateur "&" et boucle while*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
