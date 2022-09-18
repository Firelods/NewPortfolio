// const scrollContainer = document.querySelector("main");
import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll"
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.6.1/ScrollTrigger";

const asscroll = new ASScroll({
    ease: 0.1,

})



window.addEventListener('load', () => {
    asscroll.enable({
        horizontalScroll: true
    })
})

gsap.registerPlugin(ScrollTrigger);
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

const person = document.getElementById("person");

person.addEventListener("click", goToMoi)

function goToMoi() {
    console.log("goToMoi");
    asscroll.scrollTo(1300);
};