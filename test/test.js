'use strict';

 require('chai').should();

const max = require('../index.js').max;
const multiplyAndSum = require('../index.js').multiplyAndSum;


 describe('max', function () {
   it('should maximize the result when arbitray pairs are taken, then the two numbers in the pairs multiplied pairwise, then the products are summed.', function () {
     max([0,1,3,8,4,7,9,9]).should.equal(150);
     // console.log('max([0,1,3,8,4,7,9,9]) : ', max([0,1,3,8,4,7,9,9]))
     max([0,1,2,3,4,5,6,7,8]).should.equal(101);
     max([0,6,2,3,4,5,1,7,8]).should.equal(101);
     max([0,1,2,3,4,5]).should.equal(27);
     max([0,1,8,8,8,3,9,2,2,1,0,-9,-3]).should.equal(9*8+8*8+3*2+2+1+1);
     max([-1,0,1]).should.equal(1);
     max([1,1]).should.equal(2);
   });
 });


 // console.log('max[0,1,2,3,4,5]) =', max([0,1,2,3,4,5]));
 // console.log('multiplyAndSum([[2,3],[4,5]]): ', multiplyAndSum([[2,3],[4,5]]));
