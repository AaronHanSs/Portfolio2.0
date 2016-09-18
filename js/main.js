
//crée une nav bar responsive
//cacher les liens pour le mobile size et les changer en quelque chose de plus approprié

//crée une balise select
var $select = $("<select> </select>");
$("#menu").append($select);

$("#menu a").each(function(){
    var $lien = $(this);
    //crée une balise option
    var $option = $("<option> </option>");

    if($lien.parent().hasClass("selection")){
      $option.prop("selection", true);
    }
    //Le texte de l'option est le texte de lien
    //La valeur de l'option est "href"
    $option.val($lien.attr("href"));
    //ajoutez l'option pour sélectionner
    $option.text($lien.text());
    $select.append($option);
});




//1er titre apparition lente
$(".T").hide().show(1300);




// $selection.change(function(){
//  window.location = $select.val();
// });

// PREMIER ROND
window.onload = function(){
  var progInc = setInterval(incrementProg, 100);
  function incrementProg(){
	 	progressbar = document.querySelector('div[data-progress]');
    progress = progressbar.getAttribute('data-progress');
    progressbar.setAttribute('data-progress', parseInt(progress,10)+1);
    setPie();

    if (progress == 89){
      clearInterval(progInc);
    }
  }
}

function setPie(){

  var progressbar = document.querySelector('div[data-progress]');
  var quad1 = document.querySelector('.quad1'),
      quad2 = document.querySelector('.quad2'),
      quad3 = document.querySelector('.quad3'),
      quad4 = document.querySelector('.quad4');
  var progress = progressbar.getAttribute('data-progress');
  if(progress <= 25){
  	quad1.setAttribute('style', 'transform: skew(' + progress * (-90/25) + 'deg)');
  }
  else if(progress > 25 && progress <=50){
    quad1.setAttribute('style', 'transform: skew(-90deg)');
  	quad2.setAttribute('style', 'transform: skewY(' + (progress-25) * (90/25) + 'deg)');
  }
  else if(progress > 50 && progress <=75){
    quad1.setAttribute('style', 'transform: skew(-90deg)');
    quad2.setAttribute('style', 'transform: skewY(90deg)');
  	quad3.setAttribute('style', 'transform: skew(' + (progress-50) * (-90/25) + 'deg)');
  }
  else if(progress > 75 && progress <=100){
    quad1.setAttribute('style', 'transform: skew(-90deg)');
    quad2.setAttribute('style', 'transform: skewY(90deg)');
    quad3.setAttribute('style', 'transform: skew(-90deg)');
  	quad4.setAttribute('style', 'transform: skewY(' + (progress-75) * (90/25) + 'deg)');
  }
}

// END 1ER ROND
