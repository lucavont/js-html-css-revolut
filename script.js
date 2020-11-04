$(document).ready(function() {
    $('.plans').click(function() {
        $('.plans-ul').show('slow')
        $('.plans').addClass('active');


    })
    $('.plans.active').click(function() {
        $('.plans-ul').hide('slow')
        $('.plans').removeClass('active');
    })
})