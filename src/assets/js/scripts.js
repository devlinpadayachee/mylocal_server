$(document).ready(function () {
  (function ($) {
    'use strict'
    new WOW().init()
  })(jQuery)

  $('.smooth-scroll').on('click', 'a', function (event) {
    event.preventDefault()
    var elAttr = $(this).attr('href')
    var offset = ($(this).data('offset') ? $(this).data('offset') : -500)
    $('body,html').animate({
      scrollTop: $(elAttr).offset().top + offset
    }, 700)
  })
})
