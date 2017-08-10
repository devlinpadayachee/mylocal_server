$(document).ready(function () {
  $('#contactForm').validate({
    messages: {},
    errorElement: 'div'
    // errorLabelContainer: '.errorTxt'
  })
  $('#contactFormbutton').prop('disabled', 'disabled')
  $('#contactForm input').on('keyup blur', function () { // fires on every keyup & blur
    if ($('#contactForm').valid()) {                   // checks form for validity
      $('#contactFormbutton').prop('disabled', false)        // enables button
    } else {
      $('#contactFormbutton').prop('disabled', 'disabled')   // disables button
    }
  });

  (function ($) {
    'use strict'
    new WOW().init()
  })(jQuery)

  $('.smooth-scroll').on('click', 'a', function (event) {
    event.preventDefault()
    var elAttr = $(this).attr('href')
    var offset = ($(this).data('offset') ? $(this).data('offset') : -80)
    $('body,html').animate({
      scrollTop: $(elAttr).offset().top + offset
    }, 700)
  })
})
