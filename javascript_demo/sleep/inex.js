const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}


async function demo1() {
  console.log('Doing ...');
  await sleep(1000);
  console.log('DoingRestart ...');
}

demo1();