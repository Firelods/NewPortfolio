document.addEventListener('mousemove', movePointer);

function movePointer(e) {
    const pointer = document.querySelector('#pointer');
    var x = e.clientX - 8;
    var y = e.clientY - 8;
    pointer.style.transform = `translate(${x}px, ${y}px)`;
}


const pointer = document.querySelector('#pointer');
document.addEventListener("ended", function() {

    
    const ball = document.querySelector('.ball');
    console.log("TEst");
    ball.style.animation+=",orbit 10s 1s infinite linear";
    pointer.removeEventListener("ended", pointer);
});
