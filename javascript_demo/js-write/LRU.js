

function LRU(capacity){
  this.cache = new Map()
  this.limit = capacity;
}


LRU.prototype.put = function(key,value){
  if (this.cache.size === this.limit){
    const firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey)
  }
  this.cache.set(key,value);
}

LRU.prototype.get = function(key){
  if (this.cache.has(key)){
    const value = this.cache.get(key)
    this.cache.delete(key);
    this.cache.set(key,value);
    return value;
  }
  return false;
}
