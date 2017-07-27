$(document).ready(function () {
  (function ($) {
    'use strict'

    // $('body').scrollspy({
    //   target: '.navbar-fixed-top',
    //   offset: 60
    // })

    // $('#topNav').affix({
    //   offset: {
    //     top: 200
    //   }
    // })

    new WOW().init()
  })(jQuery)
  // $('#app').fullpage({
  //   scrollingSpeed: 700,
  //   scrollOverflow: false,
  //   scrollBar: true,
  //   menu: '#myMenu',
  //   fixedElements: '#topNav',
  //   animateAnchor: true,
  //   css3: true,
  //   keyboardScrolling: true,
  //   parallax: false,
  //   parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  //   anchors: ['intro', 'about', 'technologies', 'contactus'],
  //   afterLoad: function (anchorLink, index) {
  //     if (index === 1) {
  //       $('video').get(0).play()
  //     }
  //   }
  // })
})
