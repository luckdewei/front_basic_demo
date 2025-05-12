const self = this

self.addEventListener('message', (e) => {
  const { endTime, serverTime } = e.data
  let diff = endTime - serverTime
  const interval = setInterval(() => {
    console.log('diff', diff, Date.now())
    if (diff <= 0) {
      self.postMessage('done')
      clearInterval(interval)
    } else {
      diff -= 1000
    }
  }, 1000)
})