$(document).ready (function(){
$('#button').click (
    function (){
        var toAdd=$('input[name=ListaItem]').val();
        $('ul').append('<li>' +toAdd+ '</li>');
        $("input[name=ListaItem]").val = "";
})

$("#text").on("click", "li", function () {
    $(this).css("text-decoration", "line-through");
});

})