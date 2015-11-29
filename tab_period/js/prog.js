$(document).ready(function(){
/*    $("button").click(function(){
    	var def= (this).attr('id')
        $("").hide();
    	$("p#" +def).show(500);
    });
    
*/




	$('button').click(function(){
  		var idContenu= $(this).attr('class');//recupère l'id du bouton
  		alert(idContenu);
  		/*$('#def p').hide();*/
  		//("p#" +def+);.show(500);
  /*$().hide();
  $('.contenu[title='+this.title+']').show();*/
		});
	});