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