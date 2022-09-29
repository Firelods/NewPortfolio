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

const point = document.querySelector("#but");
const trait = document.querySelector("#trait");

asscroll.on('scroll', scrollPos => {
    if (scrollPos >= 3394) {
        console.log("scrollPos >= 3394");
        point.classList.add("active");
        trait.classList.add("active");
    } else {
        point.classList.remove("active");
        trait.classList.remove("active");
    }
})




const person = document.getElementById("person");

person.addEventListener("click", goToMoi)

const skills = document.getElementById("objectif");

skills.addEventListener("click", gotoSkills)

function goToMoi() {
    console.log("goToMoi");
    asscroll.scrollTo(1300);
};

function gotoSkills() {
    asscroll.scrollTo(3500);
}