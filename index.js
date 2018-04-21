'use strict';

// Challenge - part 1
// You are given a list of integers, both positive and negative. Each integer in the list must either be paired with another element in the list or be a single element. Once the elements have been paired, the integers in the pairs are multiplied and the results are summed up - the sum will include single elements.

// Action:
// Write a program to find the biggest possible sum.  Explain how would you change your code to make it deployable to AWS Lambda.

// Examples:
// For the list [0,1,2,3,4,5] the pairs (4,5) and (2,3) are formed and 0 and 1 are single elements. The maximum sum is 27 - (20+6+0+1).
// For the list [-1,0,1] the pairs (-1,0) is formed and 1 is a single element. The maximum sum is 1.
// For the list [1,1] no pairs are formed, only two single elements. The maximum sum is 2.


const max = (arrayOfInts) => {
  // console.log('\n\nstart\n');
  let newArray = [];
  let sorted = arrayOfInts.sort()
                         .filter(el => el > 0);
  let len = sorted.length;
  // console.log('sorted: ', sorted);
  // console.log('len: ',len);

  let step;
  for (let i=len-1; i>=0; i-=step) {
    let productGreater = (i) => sorted[i]*sorted[i-1] > sorted[i]+sorted[i-1];
    // console.log('productGreater: ', productGreater(i));
    // console.log('newArray: ', newArray);
    // console.log(i,':' , sorted[i]);
    if (productGreater(i)) {
      newArray.push(sorted[i]*sorted[i-1]);
      // console.log('now pushing product of ', sorted[i], ' and ', sorted[i-1]);
      // console.log('newArray: ', newArray);
      step = 2;
    } else {
      newArray.push(sorted[i])
      // console.log('now pushing ', sorted[i]);
      // console.log('newArray: ', newArray);
      step = 1;
    }
    // console.log('(after if block) ',i,':' , sorted[i], '\n\n');
  }
  // console.log('newArray: ', newArray);
  return multiplyAndSum(newArray);
  newArray = [];
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const multiplyAndSum = (arr) => arr.reduce(reducer, 0);

module.exports = {max, reducer, multiplyAndSum}
