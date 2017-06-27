$(document).ready(function(){
// Replacement background
var imgHead = ['resourse/img/webdeveloper.jpg',
               'resourse/img/hero11.jpg'], i=0;
function csaHead(){
            if(i > (imgHead.length-1)){
                  $('.top').animate({'opacity':'1'},200,function(){
            	    i=1;
                  $('.top').css({
                    'background':'url('+imgHead[0]+')',
                    'background-size':'cover',
                    'height': '100vh',
                    'background-position': 'center',
                    'background-attachment': 'fixed'});});}
            else{
                  $('.top').animate({'opacity':'1'},200,function(){
                  $('.top').css({
                    'background':'url('+imgHead[i]+')',
                    'background-size':'cover',
                    'height': '100vh',
                    'background-position': 'center',
                    'background-attachment': 'fixed'
                });
                  i++;
           });
      }
  }
var intervalCsaHead = setInterval(csaHead,8000);
/* For sticky nav */
    $('.js--about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } 
        else {
            $('nav').removeClass('sticky');
        }
    }, { offset: '1px'}
    );
    
    /* Mobile nav */
     $('.js--nav-icon').click(function() {
          var nav = $('.js--main-nav');
          var icon = $('.js--nav-icon i');
          nav.toggle()
      if (icon.hasClass('ion-navicon')) {
          icon.addClass('ion-close');
          icon.removeClass('ion-navicon');
        } 
      else {
          icon.addClass('ion-navicon');
          icon.removeClass('ion-close');
        }
    });}
    
  