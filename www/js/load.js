//$( document ).bind( "mobileinit", function() {
   /* $.mobile.allowCrossDomainPages = true;
    $.mobile.touchOverflowEnabled = false;
	$.mobile.loader.prototype.options.text = "Carregando..";
	$.mobile.loader.prototype.options.textVisible = True;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";*/
//});
/*
$(document).on("pagecreate",function(){
  verificarCadastro();
})*/

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
  

  /*$.ajax({
    url: 'http://www.livemusicapp.com.br/misvivoapp/itens.php',
    dataType: "html",
    async: false
  }).done(function(html) {
    $('header').html(html);
  });


