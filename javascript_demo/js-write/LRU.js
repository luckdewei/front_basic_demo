const map = new Map()



map.set('0', '00')
map.set('1', '11')
map.set('2', '22')
map.set('3', '33')

console.log(map.keys().next().value)

const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}