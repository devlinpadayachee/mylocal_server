$(document).ready(function () {
  (function ($) {
    'use strict'
    new WOW().init()
  })(jQuery)
  $('body').scrollspy({ target: '#body-scroller' })
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
    console.log($spy)
  })
  // $('.smooth-scroll').on('click', 'a', function (event) {
  //   event.preventDefault()
  //   var elAttr = $(this).attr('href')
  //   var offset = ($(this).data('offset') ? $(this).data('offset') : -150)
  //   $('body,html').animate({
  //     scrollTop: $(elAttr).offset().top + offset
  //   }, 700)
  // })
})
