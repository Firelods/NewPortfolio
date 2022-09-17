// const scrollContainer = document.querySelector("main");
import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll"
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.6.1/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const asscroll = new ASScroll()

window.addEventListener('load', () => {
    asscroll.enable({
        horizontalScroll: true
    })
})


ScrollTrigger.defaults({
    scroller: asscroll.containerElement
})

ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    scrollTop(value) {
        return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
});

asscroll.on("update", ScrollTrigger.update);