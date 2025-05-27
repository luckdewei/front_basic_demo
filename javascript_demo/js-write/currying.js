function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 50);
}

function sum(...args) {
  return new Promise((resolve, reject) => {
    let nums = [...args]
    let count = 0
    for(let i = 0; i < nums.length; i++) {
      asyncAdd(count, nums[i], (res) => {
        count += res
        if (i === nums.length -1) {
          resolve(count)
        }
      })
    }
  })
}

async function sum(...args) {
  let nums = [...args]
  let res = 0
  for (let num of nums) {
    res = await new Promise((resolve) => {
      asyncAdd(res, num, (res) => {
        resolve(res)
      })
    })
  }

  return res
}

function curriedSum() {
  let nums = Array.from(arguments)
  let fn = (arg) => {
    if (arg) {
      nums = nums.concat(arg)
      return fn
    } else {
      let res = nums.reduce((pre, val) => {
        return pre + val
      }, 0)
      return res
    }
  }
  return fn
}


console.log(curriedSum(1)(2)(3)())

// sum(1, 2, 3, 4, 5, 6).then((value) => console.log(value));




