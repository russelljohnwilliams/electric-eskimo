
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

