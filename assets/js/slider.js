var swiper = new Swiper(".swiper", {
    spaceBetween: 50,
    centeredSlides: true,
    loop:true,
    speed:1000,
    slidesPerView:3,
    slidesPerGroup:3,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  