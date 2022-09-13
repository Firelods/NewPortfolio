const ballListener = document.querySelector(".ball");
const {
    x: ballX,
    y: ballY,
    width: ballW,
    height: ballH
} = ballListener.getBoundingClientRect();
document.addEventListener("mousemove", ballRotation3D);

function ballRotation3D(e) {
    const {
        x: mouseX,
        y: mouseY
    } = e;
    const x = mouseX - ballX - ballW / 2;
    const y = mouseY - ballY - ballH / 2;
    ballListener.style.transform = `rotateX(${y / 15}deg) rotateY(${-x / 15}deg)`;
}