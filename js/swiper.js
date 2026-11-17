      var swiper = new Swiper('.mySwiper', {
        spaceBetween: 0, //슬라이드와 슬라이드 사이 간격
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

var swiper = new Swiper('.menu_Swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 1,
      centeredSlides: true,
    }
  }
});

var swiper = new Swiper('.md_Swiper', {
  slidesPerView: 1, // 기본값: 슬라이드 1개
  spaceBetween: 0,

  pagination: {
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 반응형 설정
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  },
});