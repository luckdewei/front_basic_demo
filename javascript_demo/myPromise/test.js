
const promisesAplusTest = require('promises-aplus-tests');
const myPromise = require('./MyPromise'); // 假设你的Promise实现在这个文件中
 
promisesAplusTest(myPromise, (err) => {
    if (err) {
        console.error("Promises A+ tests failed:", err);
    } else {
        console.log("Promises A+ tests passed!");
    }
});