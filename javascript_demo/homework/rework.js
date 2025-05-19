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

/**
 * 执行 asy1, 打印 1, new Promise(resolve => setTimout(resolve())),倒计时结束进入宏任务队列,
 * 等待 await 后的执行结束后再执行 Promise.then(console.log(2);)
 * 开始继续执行同步任务，打印 7 , 执行 asy3, 将console.log(6)放入微任务队列, 同步任务执行结束。
 * 倒计时结束, Promise.resolve().then(() => (...))进入宏任务队列, 开始执行 Promise.then(console.log(2))
 * console.log(2)放入微任务队列。开始执行微任务队列：打印 6 打印 2 ，微任务执行完毕，开始执行宏任务：将console.log(3)
 * 放入微任务队列，打印 4, 执行微任务队列 打印 3
 *  > 1 7 6 2 4 3
 */