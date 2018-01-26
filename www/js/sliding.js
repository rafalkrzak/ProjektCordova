var carousel;
$(document).ready(function () {

    carousel = $("#frame ul");
    slideArea = $("#frame");
    link = $('#frame a');

    carousel.itemslide({
        one_item: true 
    }); 
    
    //Jeśli został wciśnięty przycisk przejdź do slajdu...
    link.eq(0).click(function(){
        carousel.gotoSlide(0);
    });
    link.eq(1).click(function(){
        carousel.gotoSlide(1);
    });
    link.eq(2).click(function(){
        carousel.gotoSlide(2);
    });
    link.eq(3).click(function(){
        carousel.gotoSlide(3);
    });
    link.eq(4).click(function(){
        carousel.gotoSlide(4);
    });
    link.eq(5).click(function(){
        carousel.gotoSlide(5);
    });
    
    carousel.on('changeActiveIndex', function(event){
        var slideIndex = carousel.getActiveIndex();
        
        switch(slideIndex) {
            case 0:
                link.css("color", "#000");
                $('#frame a:eq(0)').css("color", "#eee");
                break;
            case 1:
                link.css("color", "#000");
                $('#frame a:eq(1)').css("color", "#eee");
                break;
            case 2:
                link.css("color", "#000");
                $('#frame a:eq(2)').css("color", "#eee");
                break;
            case 3:
                link.css("color", "#000");
                $('#frame a:eq(3)').css("color", "#eee");
                break;
            case 4:
                link.css("color", "#000");
                $('#frame a:eq(4)').css("color", "#eee");
                break;
            case 5:
                link.css("color", "#000");
                $('#frame a:eq(5)').css("color", "#eee");
                break;
            default:
                //nothing
        }  
    });
    

    $(window).resize(function () {
        carousel.reload();

    });
});
