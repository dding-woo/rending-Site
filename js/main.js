$(document).ready(function () {


  //메뉴 버튼 구현

  $('.menu a').on("click", function (e) {

    e.preventDefault();
    $('#header .menu_gnb').toggleClass('showmenu')

  });

  // 메뉴 클릭 시 해당 영역으로 이동

  $('.menu__list > li > a').on("click", function (e) {
    e.preventDefault();
    var menuData = $($(this).data('link'));
    var menuTopHeight = $(menuData).offset();
    scrollMove(menuTopHeight);
  });

  function scrollMove(select) {
    $('html').animate({ scrollTop: select.top }, 400)
  }

  // 프로젝트 가로 스크롤


  gsap.registerPlugin(ScrollTrigger);
  let sections = gsap.utils.toArray(".project__item li");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),  //xPercent: transform:translateX()
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal__container",
      pin: true,
      scrub: 1,
      markers: true,
      // snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500"
    }
  });










});//지우면 안됨