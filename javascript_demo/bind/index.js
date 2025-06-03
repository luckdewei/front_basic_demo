
// 简易版本bind
// Function.prototype.bind = function(context, ...args) {
//   let self = this
//   return function() {
//     return self.call(context, ...args)
//   }
// }

// bind实现
Function.prototype.bind = function(context, ...args) {
  let self = this
  let argsArr = [...args]
  return function(...moreArgs) {
    return self.apply(context, argsArr.concat([...moreArgs]))
  }
}




var obj = {
  name: "sven",
};

var func = function (a, b, c, d) {
  console.log(this.name);
  console.log([a, b, c, d]);
}.bind(obj, 1, 2);

func(3, 4);



