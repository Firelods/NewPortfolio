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
  ballListener.style.transform = `rotateX(${frontToBack * 2}deg) rotateY(${
    -leftToRight * 2
  }deg)`;
};
