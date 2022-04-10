var controller = new ScrollMagic.Controller();


var scene1 = new ScrollMagic.Scene({

  triggerElement: '.project',
  reverse: false
})

.setClassToggle('.project', 'show')
.addTo(controller);

var scene2 = new ScrollMagic.Scene({

  triggerElement: '.about-me',
  reverse: false
})
.setClassToggle('.about-me', 'show')
.addTo(controller);