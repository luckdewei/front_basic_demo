

const instanceofFn = (target, constructFn)=> {
  const prototype = constructFn.prototype;
  while(target != null) { 
    if(target === prototype) return true;
    target = Object.getPrototypeOf(target);
  }
  return false;
}