$(document).ready(function(){
  // get page url
  var page_url = window.location.href;
  // substring gets the rest of the string in page_url,
  // after the parameter in the (),
  // then varible.substring(2), would return 'nodom string'
  var page_id = page_url.substring(page_url.lastIndexOf('#') + 1);
  if (page_id == 'section3') {
    $('html, body').animate({
      // we want to get position of the scroll then we use offset and top is how far from top
      scrollTop: $('#scroll-'+ page_id).offset().top
    }, 1000);
  }else if (page_id == 'post') {
    $('html, body').animate({
      // we subtrack 20 px from top
      scrollTop: $('#scroll-'+ page_id).offset().top - 20
    }, 1000);
  }

});
