function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 50);
}

// function sum(...args) {
//   return new Promise((resolve, reject) => {
//     const nums = [...args];
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//       asyncAdd(count, nums[i], (res) => {
//         count = res + count;
//         if (i === nums.length - 1) {
//           resolve(count);
//         }
//       });
//     }
//   });
// }

// async function sum(...args) {
//   const nums = [...args];
//   let an = 0;
//   for (let num of nums) {
//     an = await new Promise((resolve) => {
//       asyncAdd(an, num, (res) => {
//         resolve(res);
//       });
//     });
//   }
//   return an;
// }

sum(1, 2, 3, 4, 5, 6).then((value) => console.log(value));

// function curriedSum() {
//   let args = Array.from(arguments);
//   let result = 0;
//   let fn = function (arg) {
//     if (arg) {
//       args = args.concat(arg);
//       return fn;
//     } else {
//       result = args.reduce((r, v) => {
//         return r + v;
//       }, result);
//       return result;
//     }
//   };
//   return fn;
// }

// console.log(curriedSum(1)(2)(3)());
