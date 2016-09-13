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

$selection.change(function(){
 window.location = $select.val();
});
