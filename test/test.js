'use strict';

 require('chai').should();

const max = require('../index.js').max;
const multiplyAndSum = require('../index.js').multiplyAndSum;

const mock = [[2,3],[4,5]];

 describe('max', function () {
   it('should maximize the result when arbitray pairs are taken, then the two numbers in the pairs multiplied pairwise, then the products are summed.', function () {
     max([0,1,3,8,4,7,9,9]).should.equal(150);
     max([0,1,2,3,4,5,6,7,8]).should.equal(101);
     max([0,1,2,3,4,5]).should.equal(27);
     max([-1,0,1]).should.equal(1);
     max([1,1]).should.equal(2);
   });
 });


 describe('multiplyAndSum', function () {
   it('should take an array of pairs of integers and multiply each, then reduce the resulting array, summing all', function () {
     // multiplyAndSum([[0],[1],[2,3],[4,5]).should.equal(27);

     multiplyAndSum([[2,3],[4,5]]).should.equal(26);
   });
 });

 console.log('max[0,1,2,3,4,5]) =', max([0,1,2,3,4,5]));
 // console.log('multiplyAndSum([[2,3],[4,5]]): ', multiplyAndSum([[2,3],[4,5]]));
