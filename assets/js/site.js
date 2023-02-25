(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

if($('body').hasScrollBar()) {
    $('#navbar-container').css("background-color",'rgba(21, 22, 22, 1)');
}

function toggleDetailCard (cardId) {
    // Hide all cards that aren't the current card. 
    $(`.detail-card:not(#${cardId})`).hide(500);

    // Hide all cards that aren't the current card.
    if ($(`#${cardId}`).css("display") === "none") {
        $(`#${cardId} .card-body .card-text`).addClass('text-light');
        $(`#${cardId} .card-body .card-text`).removeClass('text-dark');
        $(`#${cardId}`).show(500);
        
        setTimeout(() => { 
            $(`#${cardId} .card-body .card-text`).addClass('text-dark'); 
            $(`#${cardId} .card-body .card-text`).removeClass('text-light');
        }, 500);
    } else {
        $(`#${cardId} .card-body .card-text`).addClass('text-light');
        $(`#${cardId} .card-body .card-text`).removeClass('text-dark');
        $(`#${cardId}`).hide(500);
    }
}

window.onscroll = function(ev) {    
    if (window.scrollY != 0) {
        $('#navbar-container').css("background-color",'rgba(21, 22, 22, 1)');
    } else {
        $('#navbar-container').css("background-color",'rgba(41, 43, 44, 0.5)');
    }
};