//var theForm = document.getElementById("theForm");
//theForm.hidden = true;
$(document).ready(function () {
    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying item");
    });

    var productinfo = $(".product-props li");
    productinfo.on("click", function () {
        console.log("you click on" + $(this).text());
    });

    var $login = $("#login");
    var $popupForm = $(".popup-form")
    $login.on("click", function () {
        $popupForm.slideToggle(100);
    });



});