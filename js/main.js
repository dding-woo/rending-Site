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













});//지우면 안됨