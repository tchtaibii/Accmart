function ft_sc(value, svg)
{
    var p = document.getElementById(value);
    var svg = document.getElementById(svg);
    if (p.style.display == 'block')
    {
        p.style.overflow = 'hidden'
        p.style.display = 'none';
        svg.style.transform ='rotate(180deg)';
    }
    else
    {
        p.style.display = 'block';
        svg.style.transform ='rotate(0)';
    }
}

function getTextWidth(txt) {
  var $elm = $('<span class="tempforSize">'+txt+'</span>').prependTo("body");
  var elmWidth = $elm.width();
  $elm.remove();
  return elmWidth;
}
function centerSelect($elm) {
    var optionWidth = getTextWidth($elm.children(":selected").html())
    var emptySpace =   $elm.width()- optionWidth;
    $elm.css("text-indent", (emptySpace/2) - 10);// -10 for some browers to remove the right toggle control width
}
// on start 
$('.centerSelect').each(function(){
  centerSelect($(this));
});
// on change
$('.centerSelect').on('change', function(){
  centerSelect($(this));
});