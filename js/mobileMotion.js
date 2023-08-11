import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.6.1/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ballListener = document.querySelector(".ball");
const {
  x: ballX,
  y: ballY,
  width: ballW,
  height: ballH,
} = ballListener.getBoundingClientRect();

if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: rotation around z-axis
      const leftToRight = event.gamma; // gamma: left to right
      const frontToBack = event.beta; // beta: front back motion

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true
  );
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  // do something amazing
  //rotate ball on x and y axis
  ballListener.style.transform = `rotateX(${frontToBack * 2}deg) rotateY(${-leftToRight * 2
    }deg)`;
};

var text = document.querySelector(".separator div p");

gsap.to(text, {
  duration: 4,
  repeat: -1,

  x: -innerWidth,
  ease: "none",

})


var text2 = document.querySelector(".separator2 div p");



gsap.to(text2, {
  duration: 4,
  repeat: -1,
  x: -innerWidth,
  ease: "ease",
})

var text3 = document.querySelector(".separator3 div p");



gsap.to(text3, {
  duration: 4,
  repeat: -1,
  x: -innerWidth,
  ease: "none",
})