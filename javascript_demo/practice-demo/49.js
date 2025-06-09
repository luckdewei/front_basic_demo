// 49 字母异位词分组

// input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// output: [["bat"],["nat","tan"],["ate","eat","tea"]]


// var groupAnagrams = function(strs) {
//   const map = new Map();
//   for (let str of strs) {
//       let array = Array.from(str);
//       array.sort();
//       let key = array.toString();
//       let list = map.get(key) ? map.get(key) : [];
//       list.push(str);
//       map.set(key, list);
//   }
//   return Array.from(map.values());
// };

var groupAnagrams = function(strs) {
  const map = new Map();
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt() - 97]++;
      }
      let key = count.toString()
      let list = map.get(key) ? map.get(key) : []
      list.push(s)
      map.set(key, list)
  }
  return Array.from(map.values());
}




groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])