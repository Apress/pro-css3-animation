$("figure").mousemove(function(e) {
    var relativeX = e.pageX - (this.offsetLeft + 660);
    $(this).css('transform','rotateY('+ relativeX +'deg)');
});