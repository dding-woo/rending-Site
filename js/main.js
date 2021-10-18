$(document).ready(function () {


  //메뉴 버튼 구현

  $('.menu a').on("click", function (e) {

    e.preventDefault();
    $('#header .menu_gnb').toggleClass('showmenu');

    if ($('#header .menu_gnb').hasClass('showmenu')) {
      $('.gnb .menu').addClass('onmenu')
    } else {
      $('.gnb .menu').removeClass('onmenu')
    }
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


  // 미우스 따라나니기 효과
  $(window).mousemove(function (e) {
    // console.log(`페이지X좌표${e.pageX}`);
    // console.log(`페이지Y좌표${e.pageY}`);
    $('.cursor').css({ left: e.pageX - 25, top: e.pageY - 25 });
  });

  // 마우스 오버 효과
  $('body .mouse__over__style').hover(function (e) {
    $('.cursor').addClass('hovercursor')
  }, function () {
    $('.cursor').removeClass('hovercursor')
  })

  // 다크모드
  $('.dark__mode > a').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('dark');
  });

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
      // markers: true,
      // snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500"
    }
  });

  // skill y축 올라가는 효과
  gsap.to('.parallax__img__wrap', {
    scrollTrigger: {
      trigger: '#skill',
      start: 'top 50%',
      // end:'+=300',
      scrub: 2,
      // markers:true,
    },
    y: -100
  })


});//지우면 안됨