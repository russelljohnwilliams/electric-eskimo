
var donutCount = 15
var spotCount = 17
var rodCount = 11
var confettiCount = donutCount + spotCount + rodCount
var windowWidth = jQuery( window ).width() 
var windowHeight = jQuery( window ).height() 
var height
var width

window.onload = function(){
  makeConfetti(donutCount, "donut")
  makeConfetti(spotCount, "spot")
  makeConfetti(rodCount, "rod")
  setPostImageDimentions()
  // hoverPosts()
}

  //  - - - - posts - - - - 

  jQuery(document).ready(function(){
   jQuery(".script-post").click(function(){
    window.location = jQuery(this).find("a").attr("href"); 
    return false;
  });
 });



  function setPostImageDimentions(){
    var posts = jQuery(".script-posts").children()
    console.log("kids", posts.length)

    for (i = 0; i < posts.length; i++) {
      var post = jQuery(posts[i])
      var width = parseInt(post.find('img').css('width'), 10)
      console.log("width", width)
    }
  }


  jQuery(document).ready(function(){

    var post = jQuery(".script-post")
    var height = parseInt(post.find('img').css('height'), 10)
    var width = parseInt(post.find('img').css('width'), 10)
    console.log
    post.find('img').css({'filter': 'grayscale(1)', 'height': height+'px', 'width': width+'px', 'top': '0', 'left': '0', 'mix-blend-mode': 'multiply'})

    post.mouseover(function(){
      jQuery(this).find('img').css({'filter': 'none', 'height': (height + 6)+'px', 'width': (width + 6)+'px', 'top': '-3px', 'left': '-3px', 'mix-blend-mode': 'normal'})
      jQuery(this).find('a').css({'color': 'white'})
    });
    post.mouseout(function(){
      jQuery(this).find('img').css({'filter': 'grayscale(1)', 'height': height+'px', 'width': width+'px', 'top': '0', 'left': '0', 'mix-blend-mode': 'multiply'})
      jQuery(this).find('a').css({'color': 'black'})
    });
  });







  // jQuery(document).ready(function(){
  //   jQuery(".script-post").hover(
  //     function(){
  //        height = parseInt(jQuery(this).find('img').css('height'), 10)
  //        width = parseInt(jQuery(this).find('img').css('width'), 10)
  //       jQuery(this).find('script-post-thumbnail').css({'box-shadow': 'inset 0 0 100px black'})
  //       jQuery(this).find('img').css({'filter': 'none', 'height': (height + 6)+'px', 'width': (width + 6)+'px', 'top': '-3px', 'left': '-3px', 'mix-blend-mode': 'normal'})
  //       jQuery(this).find('a').css({'color': 'black'})
  //     },
  //     function(){
  //       jQuery(this).find('img').css({'filter': 'grayscale(1)', 'height': height+'px', 'width': width+'px', 'top': '0', 'left': '0', 'mix-blend-mode': 'multiply'})
  //       jQuery(this).find('script-post-thumbnail').css({'box-shadow': 'none'})

  //       jQuery(this).find('a').css({'color': 'white'})
  //     })
  // });

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


