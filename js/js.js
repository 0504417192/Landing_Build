(function($){

  $.fn.fullHeight = function(){

    var self = this;
    var windowHeight = window.innerHeight;

    var fullHeightFunction = function(){
      return self.css({
        'height': windowHeight
      });
    }

    $(window).on('resize', function(){
      windowHeight = window.innerHeight;
      fullHeightFunction();
    });

    fullHeightFunction();
    return self;
    
  }

})(jQuery);

$(document).ready(function(){
  $('.fullHeight').fullHeight();
});
//---------------fullHeight-----------------//


$('#range_costsArea').ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  postfix: "руб"

});
$('#range_houseArea').ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  postfix: "m2"

});
$('#range_landArea').ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  postfix: "m2"

});
//------------------slider---------------//

$('.btn-menu').on('click', function(){
  $('.dropdown-menu').slideToggle('500', 'linear');


});
//------------------dropdown-toggle------//
  $('a').on('click', function () {
         event.preventDefault();
        var id  =$(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });
  //------------------scrollTop---------//