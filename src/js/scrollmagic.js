var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

  triggerElement: '.hero',
  reverse: false
})

.setClassToggle('.hero', 'fade-in')
.addTo(controller);


var scene2 = new ScrollMagic.Scene({

  triggerElement: '.project',
  reverse: false
})

.setClassToggle('.project', 'fade-in')
.addTo(controller);

var scene3 = new ScrollMagic.Scene({

  triggerElement: '.about-me',
  reverse: false
})
.setClassToggle('.about-me', 'fade-in')
.addTo(controller);