document.addEventListener('mousemove', movePointer);

function movePointer(e) {
    const pointer = document.querySelector('#pointer');
    var x = e.clientX - 8;
    var y = e.clientY - 8;
    pointer.style.transform = `translate(${x}px, ${y}px)`;
}


const animation = document.querySelector('.paperplane');