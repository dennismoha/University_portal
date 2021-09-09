import * as $ from "jquery";
$(function() {


    $('[data-toggle="offcanvas"]').on("click", function() {
        $(".offcanvas-collapse").toggleClass("open");
    });
});