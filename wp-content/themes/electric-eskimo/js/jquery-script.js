
var donutCount = 15
var spotCount = 17
var rodCount = 11
var confettiCount = donutCount + spotCount + rodCount
var windowWidth = jQuery( window ).width() 
var windowHeight = jQuery( window ).height() 

window.onload = function(){
  makeConfetti(donutCount, "donut")
  makeConfetti(spotCount, "spot")
  makeConfetti(rodCount, "rod")
}

  //  - - - - posts - - - - 

  jQuery(document).ready(function(){
   jQuery(".script-post").click(function(){
    window.location = jQuery(this).find("a").attr("href"); 
    return false;
  });
 });

  jQuery(document).ready(function(){
    jQuery(".script-post").hover(
      function(){
        jQuery(this).find('img').css({'filter': 'none'})
        jQuery(this).find('a').css({'color': 'black'})
      },
      function(){
        jQuery(this).find('img').css({'filter': 'grayscale(1)' })
        jQuery(this).find('a').css({'color': 'white'})

      })

  });

//  - - - - front page confetti - - - - 

function makeConfetti(count, shape){
  for (i = 0; i < count; i++) {
    var x = randomNumberWindowWidth()
    var y = randomNumberWindowHeight()
    var z = rotateConfetti()
    var setShapeID = shape + i;
    jQuery('#confetti').append('<div class="' + shape + ' confettiShape" id="' + setShapeID + '"></div>')
    jQuery('#' + setShapeID + '').css({'top': y, 'left': x, 'transform': 'rotate(' + z + 'deg)'})
    animate(setShapeID)
  }
}

function randomNumberWindowWidth(){
  return Math.floor(Math.random() * windowWidth + 1)
}

function randomNumberWindowHeight(){
  return Math.floor(Math.random() * windowHeight + 1)
}

function rotateConfetti(){
  return Math.floor(Math.random() * 360 + 1)
}

function animate(shapeID){
  var x = randomNumberWindowWidth()
  var y = randomNumberWindowHeight()
  jQuery('#' + shapeID + '').animate({'left': x, 'top': y}, 1000000, 'linear');
};

jQuery(function() {
  jQuery('#confettiWrapper').prepend('<div id="navigationArea" class="closed"><div class="nav-list"></div></div>')
})

jQuery(function() {
  jQuery('#confettiWrapper').append('<div id="border"></div>')
})


//  - - - - navigation menu- - - - 

jQuery(function() {
  for (i = 1; i <= 3; i++){
    jQuery('#navigation-button').prepend('<div class="bar bar' + i + '"></div>')
  }
})

jQuery(function(){
  jQuery('#navigation-button').click(function(){
    jQuery("#primary-menu").toggleClass("open");
    jQuery('#navigation-button').toggleClass("change");
  });
})


