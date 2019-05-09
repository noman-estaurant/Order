$(document).ready(function() {
    $(".navigationbar .cart .added").hide();
    // if (added != 0) {
    //     $(".navigationbar .cart .added").show();
    // }
});




$("#big-menu #main-meal").click(function() {
    $(this).animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 10px 20px rgba(158, 77, 100, 0.5)",
    }, 150);
    //change to main-meal menu
});
$("#big-menu #side-meal").click(function() {
    $(this).animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 10px 20px rgba(158, 77, 100, 0.5)",
    }, 150);
    //change to side-meal menu

});
$("#big-menu #drinks").click(function() {
    $(this).animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 10px 20px rgba(158, 77, 100, 0.5)",
    }, 150);
    //change to drinks menu

});