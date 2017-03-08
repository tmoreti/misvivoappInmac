$(document).on("mobileinit",function() {
    $.mobile.autoInitializePage = false;
}); 
$.ajax({
  url: "footer.html",
  dataType: "html",
  async: false
}).done(function(html) {
  $('footer').html(html);
});

$.ajax({
  url: "header.html",
  dataType: "html",
  async: false
}).done(function(html) {
  $('header').html(html);
});


 


