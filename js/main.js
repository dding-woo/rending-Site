$(document).ready(function () {


  //메뉴 버튼 구현

  $('.menu a').on("click", function (e) {

    e.preventDefault();
    $('#header .menu_gnb').toggleClass('showmenu')
  });











});//지우면 안됨