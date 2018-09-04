$('#b2').hide();
$('#b3').hide();
$('#b4').hide();
$('.item2').hide();
$('.item3').hide();
$('.item4').hide();


$(function() 
  {
      var $list;
      $list = $('ul1');
  
      $('#b1').click(function()
        {
          $('#b2').show();
          $('#b1').hide();
        });
      
      $('#b2').click(function()
        {
          $('#b3').show();
        });
  
      $('#b3').click(function()
        {
           $('#b4').show();         

        });
  
     $('#b4').click(function()
        {
           $('#b2').hide();
           $('#b3').hide();
           $('#b4').hide();
           $('.item2').show();
           $('.item3').show();
           $('.item4').show();
		   $('body').css('background','url(anniv.jpg)');

        });
     
 })
 