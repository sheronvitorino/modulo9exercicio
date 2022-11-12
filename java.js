$(document).ready (function(){
$('#button').click (
    function (){
        var toAdd=$('input[name=ListaItem]').val();
        $('ul').append('<li>' +toAdd+ '</li>');
})

$('#text').click(function(){
    $('#text').css("text-decoration", "line-through");
})

})