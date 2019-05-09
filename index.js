$(document).ready(function() {

});




$("#big-menu #main-meal").click(function() {
    console.log("hello");
    $("#big-menu #main-meal").animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 10px 20px rgba(158, 77, 100, 0.5)",
    }, 150);
    $("#big-menu").hide(600, function() {
        //change to main-meal menu
    });
});
$("#big-menu #side-meal").click(function() {
    $("#big-menu #side-meal").animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 10px 20px rgba(158, 77, 100, 0.5)",
    }, 150);
    $("#big-menu").hide(600, function() {
        //change to side-meal menu
    });
});
$("#big-menu #drinks").click(function() {
    $("#big-menu #drinks").animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 10px 20px rgba(158, 77, 100, 0.5)",
    }, 150);
    $("#big-menu").hide(600, function() {
        //change to drinks menu
    });
});