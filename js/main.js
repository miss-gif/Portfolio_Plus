new Swiper("main> .swiper", {
  direction: "vertical", // 수직 슬라이드
  spaceBetween: 30, // 슬라이드 사이 여백
  mousewheel: true, // 마우스 휠 기능

  pagination: {
    // 페이지 번호 사용 여부
    el: ".swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 페이지 버튼 활성화
  },
});

new Swiper("main_view .swiper", {
  direction: "vertical", // 수직 슬라이드

  autoplay: true, // 자동 재생 여부
  autoplay: {
    delay: 5000, // 5초마다 슬라이드 바뀜
  },

  loop: true, // 반복 재생 여부

  spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  mousewheel: true, // 마우스 휠 기능
  slidesPerView: "auto", // 만약 이미지 너비가 각자 다를 때는 자동으로 보이게 함.
  effect: "fade", // 슬라이드가 페이드가 된다.

  pagination: {
    // 페이지 번호 사용 여부
    el: ".swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 페이지 버튼 활성화
  },

  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".swiper-button-next", // 이전 버튼 선택자
    nextEl: ".swiper-button-prev'", // 다음 버튼 선택자
  },

  scrollbar: {
    // 스크롤 사용 여부
    el: ".swiper-scrollbar", // 스크롤 위치 표시
    hide: false, // 스크롤이 보이게 설정됨.
  },
});
