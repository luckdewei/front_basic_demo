var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});

p.catch((error) => console.log(error.message)); // The Fails!
p.catch((error) => console.log(error.message)); // The Fails!

var p = new Promise((resolve, reject) => {
  return Promise.reject(Error("The Fails!"));
});

p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
// 报错了，因为上面的代码会抛出错误
// p还是pending状态，没有接收到reject的错误，所以代码会抛出错误

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error)) // Error: The Fails!
  .then((error) => console.log(error)); // undefined
// this.value = undefined

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error.message)) // Error: The Fails!
  .catch((error) => console.log(error.message)); // 不执行

new Promise((resolve, reject) => {
  resolve("Success!");
})
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    return "actually, that worked";
  })
  .catch((error) => console.log(error.message)); // 无打印输出

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data); // if x is not a promise, return x
  }); // SUCCESS!

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data); // SUCCESS!
    return data;
  })
  .then(console.log); // SUCCESS!

Promise.resolve("Success!")
  .then((data) => {
    data.toUpperCase();
  })
  .then((data) => {
    console.log(data); // undefined
  });

Promise.resolve("Success!")
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    return "actually, that worked";
  })
  .then((data) => {
    throw Error("The fails!");
  })
  .catch((error) => console.log(error.message)); // The fails!

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 3000);
});
promise.then(2).then((n) => {
  console.log("n", n); // 1
});

// 打印结果是？？
promise
  .then(() => {
    return Promise.resolve(2);
  })
  .then((n) => {
    console.log(n); // 3秒后打印2
  });

// 打印结果是？？
promise
  .then(() => {
    return 2;
  })
  .then((n) => {
    console.log(n); // 3秒后打印2
  });

// 打印结果是？？
promise.then(2).then((n) => {
  console.log("n", n); // 3秒后打印1
});

const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});

promise
  .then((res) => {
    console.log("then: ", res); // then: success1
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

Promise.resolve()
  .then(() => {
    return new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res); // then:  Error: error!!!
  })
  .catch((err) => {
    console.log("catch: ", err);
  });

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log); // 1

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

// 1243 同步先执行，异步后执行

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg);
    });
  });

first().then((arg) => {
  console.log(arg);
});
console.log(4);

// 374125 同步先执行，异步进入队列，setTimeout 进入宏任务队列，.then 进入微任务队列，微任务队列先执行

Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");

//start promise1 timer1 promise2 timer2

setTimeout(() => {
  console.log("timer1");
  setTimeout(() => {
    console.log("timer3");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// start timer1 timer2 timer3

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// start timer1 promise timer2

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

// 1 2 4 timerStart timerEnd success

async function foo() {
  console.log("foo");
}

async function bar() {
  console.log("bar start");
  await foo();
  console.log("bar end");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

bar();

new Promise(function (resolve) {
  console.log("promise start");
  resolve();
}).then(function () {
  console.log("promise end");
});

console.log("script end");

// script start-》 bar start-》foo-》promise start-》bar end -》script end-》promise end-》setTimeout

async function asy1() {
  console.log(1);
  await asy2();
  console.log(2);
}

const asy2 = async () => {
  await setTimeout(() => {
    Promise.resolve().then(() => {
      console.log(3);
    });
    console.log(4);
  });
};

const asy3 = async () => {
  Promise.resolve().then(() => {
    console.log(6);
  });
};

asy1();
console.log(7);
asy3();

// 1 7 6 4 3 2

// 错误 答案：1 7 6 2 4 3
// await 对 setTimeout 宏任务不等待

// 手写 .all方法
Promise.prototype.all = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("arguments is not array"));
    }
    const result = [];
    const count = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          result[i] = res;
          count++;

          if (count === promises.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// 手写.race

Promise.prototype.race = (promises) => {
  if (!Array.isArray(promises)) {
    reject(new Error("arguments is not array"));
  }
  promises.forEach((p) => {
    Promise.resolve(p)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};







function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Li";
  let age = 12;
}
sayHi();
// undefined （var 变量提升）， 报错（let 声明之前age不存在）








for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // 3 3 3 var 声明在全局作用域， 每次迭代i都会更新，导致setTimeout取到的i为3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // 0 1 2  let 具有块级作用域，每次迭代都会生成一个块级作用域，每个i都是新值， setTimeout获取的都是块级作用域中的i







const shape = {
  redius: 10,
  diameter() {
    return this.redius * 2;
  },
  perimeter: () => 2 * Math.PI * this.redius,
};

shape.diameter(); // 20
shape.perimeter(); // 20*Math.PI  做错 答案：NaN








let c = {
  greeting: "Hey!",
};
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello 拷贝的引用地址

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false
// b 是 Number{3} b.valueOf() === 3






class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }
  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" }); // purple
freddie.colorChange("orange"); // 报错，static 函数不能用实例化对象来调用







let greeting;

greetign = {};

console.log(greetign); // {} 不懂这道题要考什么








function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Nallie");

Person.getFullName = () => {
  this.firstName + this.lastName;
};

console.log(member.getFullName());
// 报错 getFullName 找不到 member 上找不到会向上级原型链找 member.__proto__ = Person.prototype,
// Person.prototype上找不到 getFullName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia); // Person{firstName: Lydia, lastName: 'Hallie'}
console.log(sarah); // undefined  执行一个普通函数








function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const p = "Lydia";
const age = 21;

getPersonInfo`${p} is ${age} years old`; // 不会

// 如果使用标记的模板字符串，则第一个参数的值始终是字符串值的数组。
// 其余参数获取传递到模板字符串中的表达式的值！







function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}
checkAge({ age: 18 });

// Hmm.. You don't have an age I guess  引用地址不一致





const obj = {1: 'a', 2: 'b', 3: 'c'}
const set = new Set([1, 2, 3, 4])


obj.hasOwnProperty('1') // true obj的key内部会转成字符串
obj.hasOwnProperty(1) // true
set.has('1') // false
set.has(1) // true






String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already";
}

const name = 'Lydia';

name.giveLydiaPizza(); // Just give Lydia pizza already







const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 123
a[c] = 456
console.log(a[b]) // 456  a[Object] = 123 b[Object] = 456



const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()