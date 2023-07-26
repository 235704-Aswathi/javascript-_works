import isPrime from "../src/numbers.js";
import {assert} from "chai"

const num1=7;
const num2=4;

describe('test cases for isPrime',()=>{

    it('should return true if number is a prime', () => {
        assert.equal(isPrime(num1), true)
    })

    it('should return false if number is not a prime', () => {
        assert.equal(isPrime(num2), false)
    })


})