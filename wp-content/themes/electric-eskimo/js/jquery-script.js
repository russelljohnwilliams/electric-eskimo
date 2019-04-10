
var donutCount = 15
var spotCount = 17
var rodCount = 11
var confettiCount = donutCount + spotCount + rodCount
var windowWidth = jQuery( window ).width() 
var windowHeight = jQuery( window ).height() 
var height
var width

window.onload = function(){
  parallax(jQuery(".post .post-thumbnail img"), -3);
  makeConfetti(donutCount, "donut")
  makeConfetti(spotCount, "spot")
  makeConfetti(rodCount, "rod")
}

//  - - - - splits header into two separate words so that second word can be re-styled - - - - 

jQuery(document).ready(function(){
  var title = jQuery('.site-title a')
  var text = title.text().split(' ')
  var last = text.pop()
  title.html([text, ' <span class="last-word">', last, '</span>'].join(''));
  
  setTimeout(function(){title.parent().fadeIn('slow'); }, 1000);

})

//  - - - - posts - - - - 

jQuery(document).ready(function(){
 jQuery(".script-post").click(function(){
  window.location = jQuery(this).find("a").attr("href"); 
  return false;
});
});


//  - - - - creates hover over posts to change text and image styling - - - - 

jQuery(document).ready(function(){
  var post = jQuery(".script-post")
  var height = parseInt(post.find('img').css('height'), 10)
  var width = parseInt(post.find('img').css('width'), 10)
  console.log
  post.find('img').css({'filter': 'grayscale(1)', 'height': height+'px', 'width': width+'px', 'top': '0', 'left': '0', 'mix-blend-mode': 'multiply'})
  post.mouseover(function(){
    jQuery(this).find('.script-post-thumbnail').addClass('vignette')
    jQuery(this).find('img').css({'filter': 'none', 'height': (height + 10)+'px', 'width': (width + 10)+'px', 'top': '-5px', 'left': '-5px'})
    jQuery(this).find('a').css({'color': 'white'})
  });
  post.mouseout(function(){
    jQuery(this).find('img').css({'filter': 'grayscale(1)', 'height': height+'px', 'width': width+'px', 'top': '0', 'left': '0'})
    jQuery(this).find('a').css({'color': 'black'})
    jQuery(this).find('.script-post-thumbnail').removeClass('vignette')
  });
});

//  - - - - creates hover over images to change text and image styling - - - - 

jQuery(document).ready(function(){
  var post = jQuery(".wp-block-image")
  var height = parseInt(post.find('img').css('height'), 10)
  var width = parseInt(post.find('img').css('width'), 10)
  post.find('img').css({'height': height+'px', 'width': width+'px', 'top': '0', 'left': '0'})
  post.mouseover(function(){
    jQuery(this).find('figcaption').addClass('figcaption-show').css({'opacity': '1'})
    jQuery(this).find('img').css({'filter': 'none', 'height': (height + 12)+'px', 'width': (width + 12)+'px'})
  });
  post.mouseout(function(){
    jQuery(this).find('img').css({'height': height+'px', 'width': width+'px'})
    jQuery(this).find('figcaption').removeClass('figcaption-show').css({'opacity': '0'})
  });
});

// Function to open up a layer with to show an image

jQuery(function() {
  jQuery('figcaption').click(function(event){
    var post = jQuery(this).parent()
    post.find('img').removeAttr('style')
    var clone = post.clone().removeClass('wp-block-image').addClass('lightbox').prependTo('.entry-content').hide().fadeIn()
    var button = jQuery('<div class="close-button"><div class="line-1"></div><div class="line-2"></div></div>').appendTo(clone)
    jQuery('.lightbox .figcaption-show').removeClass('figcaption-show').addClass('figcaption-clone')
    closeTheLightbox()
  });
});

// function to close layer that shows image

function closeTheLightbox(){
  jQuery('.close-button').click(function(event){
    var post = jQuery(this).parent().fadeOut('slow', jQuery(this).parent().remove())
  });
}

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

//  - - - - front page confetti - - - - 





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

//  - - - creates parallax on scroll - - -

function parallax(object, speed){
  jQuery(window).scroll(function(){
    var win = jQuery(window);
    var obj = jQuery(object.parent());
    var scrollPosition = win.scrollTop();
    var visibleArea = win.scrollTop() + win.height();
    var objectEndPosition = (obj.offset().top + obj.outerHeight());
    var trueFalse = (visibleArea >= objectEndPosition && scrollPosition <= objectEndPosition ? true : false)
    if (trueFalse == true){
      var doc = jQuery(document).scrollTop();
      var objTop = jQuery(obj).position().top;
      object.css({"top" : (doc / (-speed )) });
    }
  });
};



