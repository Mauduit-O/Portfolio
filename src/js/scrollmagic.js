var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

  triggerElement: '.section1',
  reverse: false
})

.setClassToggle('.section1', 'fade-in')
.addTo(controller);


var scene2 = new ScrollMagic.Scene({

  triggerElement: '.section2',
  reverse: false
})

.setClassToggle('.section2', 'fade-in')
.addTo(controller);

var scene3 = new ScrollMagic.Scene({

  triggerElement: '.section3',
  reverse: false
})
.setClassToggle('.section3', 'fade-in')
.addTo(controller);