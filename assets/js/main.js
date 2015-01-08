$(".news").masonry({
    itemSelector: '.entry',
    "gutter": 30
})

$(function(){
    window.onscroll  = function () { 
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled >= 100) {
            $(".categories").addClass('padding');
        } else {
            $(".categories").removeClass('padding');
        }
    }

    $(".share").hover(function(){
            $(".share i").addClass('dn');
            $(".share__name").addClass('dib');
            $(this).addClass('share__hover');
            $(".share__list").removeClass('dn');
        }, function(){
                $(".share i").removeClass('dn');
                $(".share__name").removeClass('dib')
                $(".share__list").addClass('dn');
                $(this).removeClass('share__hover');
    })

})