const work = new Worker('./work.js')

// function CountDown(endTime, serverTime, endCallback) {
//   work.postMessage({endTime, serverTime})
//   work.addEventListener('message', endCallback)
// }

function CountDown(endTime, serverTime, endCallback) {
  let diff = endTime - serverTime
  const interval = setInterval(() => {
    if (diff <= 0) {
      clearInterval(interval)
      endCallback()
    } else {
      diff-=1000
      console.log(diff, Date.now())
    }
  }, 1000)
}


// function CountDown(endTime, serverTime, endCallback) {
//   const startTime = performance.now();
//   let animationId;
//   const duration = endTime - serverTime;
//   function update() {
//     const elapsed = performance.now() - startTime;
//     if (elapsed >= duration) {
//       cancelAnimationFrame(animationId);
//       endCallback();
//     } else {
//       animationId = requestAnimationFrame(update);
//     }
//   }

//   animationId = requestAnimationFrame(update);

//   return () => {
//     cancelAnimationFrame(animationId);
//   };
// }