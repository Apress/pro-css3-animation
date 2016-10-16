var numberOfImgs = $("figure img").length;
var degreeSep = 360 / (numberOfImgs - 1);
var angle = 0;
for (i = 1; i < numberOfImgs; i++) {
    $("figure img:nth-child(" + (i) + ")").css('transform','rotateY('+ angle +'deg)');
    angle = angle + degreeSep;
}