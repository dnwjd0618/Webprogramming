$(document).ready(function () {
  function showPage(pageId) {
    $(".page").removeClass("active-page");
    $("#" + pageId).addClass("active-page");

    $(".nav-link").removeClass("active");
    $('.nav-link[data-page="' + pageId + '"]').addClass("active");
    
    $(".bottom-nav-link").removeClass("active");
    $('.bottom-nav-link[data-page="' + pageId + '"]').addClass("active");

    $("#navMenu").removeClass("open");
    $("html, body").animate({ scrollTop: 0 }, 300);
  }

  $("[data-page]").on("click", function (event) {
    event.preventDefault();
    var pageId = $(this).data("page");
    showPage(pageId);
    history.pushState(null, "", "#" + pageId);
  });

  $("#menuToggle").on("click", function () {
    $("#navMenu").toggleClass("open");
  });

  var pageFromUrl = window.location.hash.replace("#", "");
  if (pageFromUrl) {
    showPage(pageFromUrl);
  }
});