function myPromise(executor) {
  let self = this;
  self.status = 'pending';
  self.onFulfilled = [];
}

const foo = () => {
  console.log("hello");
}

foo();
