$(function () {
  // ------ Кнопка бургер-меню для адаптива ------------
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  // ------ Плавный переход к разделам сайта с меню -----------
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body, html").animate({ scrollTop: top }, 500);
  });

  // ------------- Слайдер ----------------------
  $(".top__slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="37px" viewBox="0 0 7 14" version="1.1"><g><path d="M 5.25 12.25 C 5.027344 12.25 4.800781 12.164062 4.632812 11.992188 L 0.257812 7.617188 C -0.0859375 7.277344 -0.0859375 6.722656 0.257812 6.382812 L 4.632812 2.007812 C 4.972656 1.664062 5.527344 1.664062 5.867188 2.007812 C 6.210938 2.347656 6.210938 2.902344 5.867188 3.242188 L 2.113281 7 L 5.871094 10.757812 C 6.210938 11.097656 6.210938 11.652344 5.871094 11.996094 C 5.699219 12.164062 5.472656 12.25 5.25 12.25 Z M 5.25 12.25 "/></g></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="37px" viewBox="0 0 7 14" version="1.1"><g><path d="M 1.75 12.25 C 1.527344 12.25 1.300781 12.164062 1.132812 11.992188 C 0.789062 11.652344 0.789062 11.097656 1.132812 10.757812 L 4.890625 7 L 1.132812 3.242188 C 0.789062 2.902344 0.789062 2.347656 1.132812 2.003906 C 1.472656 1.664062 2.027344 1.664062 2.367188 2.003906 L 6.742188 6.378906 C 7.085938 6.722656 7.085938 7.277344 6.742188 7.617188 L 2.367188 11.992188 C 2.199219 12.164062 1.972656 12.25 1.75 12.25 Z M 1.75 12.25 "/></g></svg></button>',
    infinite: false,
    responsive: [
      {
        breakpoint: 1161,
        settings: {
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });

  // Выпадающий список раздела "About creativia"
  // #toggleButton1
  $("#toggleButton1").click(function (event) {
    $("#toggleButton1").toggleClass("toggleButton--active");
    $("#selectedText1").toggleClass("selectedText--active");
    //bind to body for click anywhere close
    $("body").one("click", function () {
      $("#dropDownItems1").animate({ opacity: "hide" }, "fast");
    });
    event.stopPropagation();

    $("#dropDownItems1").toggle("fast");
  });

  //option has been clicked
  /*
   1. Get the link text of the item and set the selected text to it
   2. Toggle the currently shown element in place with the chosen element
   3. Set the clicked link to the class 'visible'
   */
  $("#dropDownItems1 li").click(function (e) {
    var target = e.target; //target of the link
    var linkText = $(this).text();
    var hash = $(this)[1]; //should map to the id of the content to show

    $("#dropDownItems1").animate({ opacity: "hide" }, "fast");
    $("#dropDownItems1 li").removeClass("visible selected");
    $(this).addClass("visible selected");

    //set the selected text
    $("#selectedText1").html(linkText);

    //hide currently visible content
    $(this)
      .parent()
      .parent()
      .parent()
      .nextAll(".visibleContent")
      .animate({ opacity: "hide" }, "fast")
      .removeClass("visibleContent")
      .addClass("invisible");

    //show the div we want
    $("#" + hash)
      .animate({ opacity: "show" }, "fast")
      .addClass("visibleContent")
      .removeClass("invisible");

    return false;
  });

  // #toggleButton2
  $("#toggleButton2").click(function (event) {
    $("#toggleButton2").toggleClass("toggleButton--active");
    $("#selectedText2").toggleClass("selectedText--active");
    //bind to body for click anywhere close
    $("body").one("click", function () {
      $("#dropDownItems2").animate({ opacity: "hide" }, "fast");
    });
    event.stopPropagation();

    $("#dropDownItems2").toggle("fast");
  });

  //option has been clicked
  /*
   1. Get the link text of the item and set the selected text to it
   2. Toggle the currently shown element in place with the chosen element
   3. Set the clicked link to the class 'visible'
   */
  $("#dropDownItems2 li").click(function (e) {
    var target = e.target; //target of the link
    var linkText = $(this).text();
    var hash = $(this)[1]; //should map to the id of the content to show

    $("#dropDownItems2").animate({ opacity: "hide" }, "fast");
    $("#dropDownItems2 li").removeClass("visible selected");
    $(this).addClass("visible selected");

    //set the selected text
    $("#selectedText2").html(linkText);

    //hide currently visible content
    $(this)
      .parent()
      .parent()
      .parent()
      .nextAll(".visibleContent")
      .animate({ opacity: "hide" }, "fast")
      .removeClass("visibleContent")
      .addClass("invisible");

    //show the div we want
    $("#" + hash)
      .animate({ opacity: "show" }, "fast")
      .addClass("visibleContent")
      .removeClass("invisible");

    return false;
  });

  // #toggleButton3
  $("#toggleButton3").click(function (event) {
    $("#toggleButton3").toggleClass("toggleButton--active");
    $("#selectedText3").toggleClass("selectedText--active");
    //bind to body for click anywhere close
    $("body").one("click", function () {
      $("#dropDownItems3").animate({ opacity: "hide" }, "fast");
    });
    event.stopPropagation();

    $("#dropDownItems3").toggle("fast");
  });

  //option has been clicked
  /*
   1. Get the link text of the item and set the selected text to it
   2. Toggle the currently shown element in place with the chosen element
   3. Set the clicked link to the class 'visible'
   */
  $("#dropDownItems3 li").click(function (e) {
    var target = e.target; //target of the link
    var linkText = $(this).text();
    var hash = $(this)[1]; //should map to the id of the content to show

    $("#dropDownItems3").animate({ opacity: "hide" }, "fast");
    $("#dropDownItems3 li").removeClass("visible selected");
    $(this).addClass("visible selected");

    //set the selected text
    $("#selectedText3").html(linkText);

    //hide currently visible content
    $(this)
      .parent()
      .parent()
      .parent()
      .nextAll(".visibleContent")
      .animate({ opacity: "hide" }, "fast")
      .removeClass("visibleContent")
      .addClass("invisible");

    //show the div we want
    $("#" + hash)
      .animate({ opacity: "show" }, "fast")
      .addClass("visibleContent")
      .removeClass("invisible");

    return false;
  });
  // Выпадающий список раздела "About creativia" /END

  // Галерея
  // Для сортировки изображений галереи использовал плагин mixitup.min.js
  var mixer = mixitup(".gallery__inner");

  // Слайдер отзывы наших клиентов
  $(".clients__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
});
