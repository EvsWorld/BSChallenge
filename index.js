'use strict';

// Challenge - part 1
// You are given a list of integers, both positive and negative. Each integer in the list must either be paired with another element in the list or be a single element. Once the elements have been paired, the integers in the pairs are multiplied and the results are summed up - the sum will include single elements.

// Action:
// Write a program to find the biggest possible sum.  Explain how would you change your code to make it deployable to AWS Lambda.

// Examples:
// For the list [0,1,2,3,4,5] the pairs (4,5) and (2,3) are formed and 0 and 1 are single elements. The maximum sum is 27 - (20+6+0+1).
// For the list [-1,0,1] the pairs (-1,0) is formed and 1 is a single element. The maximum sum is 1.
// For the list [1,1] no pairs are formed, only two single elements. The maximum sum is 2.

// run script in terminal by passing a string of numbers seperated by commas, as follows:
//
// node index 0,1,2,3,4,5

// let arrayArg = process.argv[2].split(",")


const max = (arrayOfInts) => {
  let prs = [];
  console.log('first call\nprs: ', prs);
  let sAndR = arrayOfInts.sort((a,b) => a-b)
                         .reverse()
                         .filter(el => el !== 0);
  // let len = isEven(sAndR.length) ? sAndR.length : (sAndR.length-1);
  let len = sAndR.length;
  console.log('sorted and reversed', sAndR);
  console.log('len: ',len);


  for (let i=0; i<=len; i++) {
    console.log('prs: ', prs);
    // console.log('for loop sAndR ',i,': ' , sAndR[i]);
    sAndR[i+1] ? prs.push([sAndR[i], sAndR[i+1]]) : null;
    sAndR[i+1] ? console.log('just pushed: ',[sAndR[i],sAndR[i+1]]) : null;
    i !== sAndR.length ? i++ : null;
    console.log('prs: ', prs);
  }
  // !isEven(sAndR.length) ? prs.push(sAndR[sAndR.length-1]) : null;
   console.log('prs: ', prs);
  return multiplyAndSum(prs);
  prs = [];
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const multiplyAndSum = (arr) => {
  let sum = arr.map(el => {
                  let ret = (el.length > 1) ? el[0]*el[1] : el[0];
                  return ret;
                })
                .reduce(reducer, 0);
  console.log('multiplyAndSum: ', sum);
  return sum;
}

const isEven = (num) => !(num % 2);

module.exports = {max, reducer, multiplyAndSum}
