document.addEventListener('mousemove', movePointer);

function movePointer(e) {
    const pointer = document.querySelector('#pointer');
    pointer.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px,0px)`;
}


const animation = document.querySelector('.paperplane');
animation.addEventListener('click', () => {
    animation.style.animation = 'paperPlane 2s linear forwards'
})

animation.addEventListener('animationend', () => {
    window.location.href = "./portfolio.html";
});