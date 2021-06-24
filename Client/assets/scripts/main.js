/* Считываем начальные данные - START */
var HOVER_ARRAY = document.querySelectorAll('.HoverElement');
var HoverLine = document.getElementById('LineMenu');
var MenuHover = document.getElementById('MenuHover');
/* Считываем начальные данные - END */
window.addEventListener('load', function () {
    var currentWidth = HOVER_ARRAY[0].offsetWidth;
    var currentLeft = HOVER_ARRAY[0].offsetLeft;
    HoverLine.style.width = currentWidth + "px";
    HoverLine.style.left = currentLeft + "px";
});
HOVER_ARRAY.forEach(function (element) {
    element.addEventListener('mouseover', function (ev) {
        var newWidth = ev.target.offsetWidth;
        var newLeft = ev.target.offsetLeft;
        HoverLine.style.left = newLeft + "px";
        HoverLine.style.width = newWidth + "px";
    });
});
MenuHover.addEventListener('mouseout', function (ev) {
    if (ev.relatedTarget !== MenuHover) {
        HoverLine.style.left = '0px';
        HoverLine.style.width = HOVER_ARRAY[0].offsetWidth + "px";
    }
});
