
$(function(){
    window.onscroll  = function () { 
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled >= 78) {
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

    $(".news").imagesLoaded(function() {
        console.log('all images are loaded');
        $(".news").masonry({
            itemSelector: '.entry',
            "gutter": 30
        }).animate({'opacity': 1}, 500);
        $("#preloader").addClass('remove');
        
    });
})


