$.ajax({
  url: "footer.html",
  cache: false,
  dataType: "html"
}).done(function(html) {
  $('footer').html(html);
});

$.ajax({
  url: "header.html",
  cache: false,
  dataType: "html"
}).done(function(html) {
  $('header').html(html);
});
