document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
})

class HeroSlider {
   constructor() {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      grabCursor: true, //grab時のカーソル
      loop: true,
      effect: 'fade',
      centeredSliders: true, //slidersを中央にする
      slidesPerView: 1, //画面内での画像の表示枚数
      speed: 1000,
      // breakpoints: {
      //   1024: {
      //     slidesPerView: 1,
      //   }
      // },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false, //grabされてもオートでスライドさせるため
      }
    });
   }
}

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: true,
//   effect: 'coverflow',
// });