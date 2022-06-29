const footer = document.querySelector('.footer');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
}

const io = new IntersectionObserver(cb);
io.observe(footer);

const hidden = document.querySelector('.swiper');
const pagetop = document.querySelector('.pagetop');
const cb2 = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      pagetop.classList.add('hidden');
    } else {
      pagetop.classList.remove('hidden');
    }
  });
}

const options = {
  rootMargin: "0px 0px -500px 0px",
  // threshold: [1]
};


const io2 = new IntersectionObserver(cb2, options);
io2.observe(hidden);