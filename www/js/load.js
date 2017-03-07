/*$( document ).bind( "mobileinit", function() {
    $.mobile.allowCrossDomainPages = true;
    $.mobile.touchOverflowEnabled = false;
	$.mobile.loader.prototype.options.text = "Carregando..";
	$.mobile.loader.prototype.options.textVisible = True;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";
});*/


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
  });*/

  var email=localStorage.getItem('email');
  $.ajax({
      url:'http://www.livemusicapp.com.br/misvivoapp/usuarios.php',
      method: 'POST',
      dataType: 'html',
      data:{
          tipo: 'verificar',
          email: email
      },
      beforeSend: function() {
              // This callback function will trigger before data is sent
              $.mobile.loading('show', {theme:"b"}); // This will show AJAX spinner
          },
  }).done(function(html){
      $.mobile.loading('hide');
      if(html==0){
          $.mobile.changePage("#cadastro");
          //$('body').fadeIn('fast');
      }else{
          window.plugins.OneSignal.sendTag("fl_autorizado", "1");
          $.mobile.changePage("#logado");
          //$('body').fadeIn('fast');
      }
  });

