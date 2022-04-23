new Swiper(".swiper", {
  direction: "vertical", // 수직 슬라이드
  spaceBetween: 30, // 슬라이드 사이 여백
  mousewheel: true, // 마우스 휠 기능

  pagination: {
    // 페이지 번호 사용 여부
    el: ".swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 페이지 버튼 활성화
  },
});
