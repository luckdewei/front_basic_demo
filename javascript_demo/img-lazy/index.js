function isVisible(el) {
  const position = el.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;

  const topVisible = position.top > 0 && position.top < windowHeight;

  const bottomVisible = position.bottom > 0 && position.bottom < windowHeight;

  return topVisible && bottomVisible;
}

function imgLazyLoad() {
  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    const realSrc = img.dataset.src;
    if (!realSrc) continue;
    console.log('isVisible(img)', isVisible(img), img);
    if (!isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

function throttle(fn, wait) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait);
  };
}

window.addEventListener("scroll", imgLazyLoad);
