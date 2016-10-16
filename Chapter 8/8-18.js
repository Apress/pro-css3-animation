$(function() {
    var footerBottom = $("#articlefooter").offset().top + $("#articlefooter").height();
       $(window).scroll(function() {
            if ($(this).scrollTop() > (footerBottom - $(window).height())) {
}); 
});