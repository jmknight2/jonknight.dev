function toggleDetailCard (cardId) {
    // Hide all cards that aren't the current card. 
    $(`.detail-card:not(#${cardId})`).hide(500);

    // Hide all cards that aren't the current card.
    if ($(`#${cardId}`).css("display") === "none") {
        $(`#${cardId}`).show(500);
    } else {
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