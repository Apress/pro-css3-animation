$(function() {
    var articleheight = $("body").height();
    $(window).scroll(function() {
        if ($(this).scrollTop() > (articleheight / 2)) {
              $("#prevpage").toggleClass("linkmoveleft");
              $("#nextpage").toggleClass("linkmoveright");
}); 
});