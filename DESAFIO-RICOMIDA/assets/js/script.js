$('#enviarcorreo').click(function(){
    alert('El correo fue enviado correctamente..');
});

$('.card-tittle').click(function() {
    $('.card-text').toggle('d-none');
});

$('h3').on("dblclick", function(){
    $(this).css('color', 'red');
});
