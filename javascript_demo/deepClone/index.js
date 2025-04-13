// 最基础版
function deepClone1(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  let cloneObj = Array.isArray(obj)? []: {};
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone1(obj[key]);
    }
  }
  return cloneObj;
}

// 考虑循环引用
function deepClone2(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj;
  // 如果已经克隆过了，直接返回
  if (map.has(obj)) return map.get(obj);

  let cloneObj = Array.isArray(obj)? []: {};
  map.set(obj, cloneObj);

  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone2(obj[key], map);
    }
  }
  return cloneObj;
}

let a = {};
a.b = a;
let b = deepClone2(a);
console.log(b);

