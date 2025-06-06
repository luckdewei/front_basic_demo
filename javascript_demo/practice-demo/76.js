// 76 最小覆盖子串

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = new Map()
  let len = s.length
  let an = ''
  for(let s of t) {
    map.set(s, (map.get(s) || 0) + 1)
  }
  let dif = map.size
  let l = 0, r = 0
  while(r<len) {
    if(map.has(s[r])) {
      map.set(s[r], map.get(s[r])-1)
    }
    if (map.get(s[r]) === 0) {
      dif-- 
    }
    while(dif === 0) {
      let newAn = s.substring(l, r+1)
      if (newAn.length < an.length || an == '') {
        an = newAn
      }
      if(map.has(s[l])) {
        if(map.get(s[l]) === 0) dif++
        map.set(s[l], map.get(s[l]) + 1)
      }
      l++
    }
    r++
  }
  return an
}



minWindow('ADOBECODEBANC', 'ABC')
