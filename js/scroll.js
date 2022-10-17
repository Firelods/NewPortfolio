// const scrollContainer = document.querySelector("main");
import ASScroll from "https://cdn.skypack.dev/@ashthornton/asscroll"
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.6.1/ScrollTrigger";

const asscroll = new ASScroll({
    ease: 0.1,

})



window.addEventListener('load', () => {
    asscroll.enable({
        horizontalScroll: true,
        touchScrollType: 'transform'
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
const point2 = document.querySelector("#but2");
const trait = document.querySelector(".trait");
const trait2 = document.querySelector("#trait2");

asscroll.on('scroll', scrollPos => {
    console.log(scrollPos);
    if (scrollPos >= 3200) {
        console.log("scrollPos >= 3394");
        point.classList.add("active");

        trait.classList.add("active");

        if (scrollPos >= 3800) {
            point2.classList.add("active");
            trait2.classList.add("active");
        } else {
            point2.classList.remove("active");
            trait2.classList.remove("active");
        }
    } else {

        point.classList.remove("active");
        trait.classList.remove("active");
    }
})




const person = document.getElementById("person");

person.addEventListener("click", goToMoi)

const skills = document.getElementById("objectif");

skills.addEventListener("click", gotoSkills)

const projects = document.getElementById("projects");

projects.addEventListener("click", gotoProjects)

function gotoProjects() {
    asscroll.scrollTo(5300);
}

function goToMoi() {
    console.log("goToMoi");
    asscroll.scrollTo(1300);
};

function gotoSkills() {
    asscroll.scrollTo(3500);
}

const cross = document.querySelector("#cross");

cross.addEventListener("click", closeMenu);


var count = 0;

function closeMenu() {
    if (count == 1) {
        location.href = "https://google.com";
    }
    console.log("closeMenu");
    count++;
    const main = document.querySelector("main");
    main.classList.add("secousse");

}


const contact = document.querySelector("#contact");

contact.addEventListener("click", goToContact);


function goToContact() {
    location.href = "mailto:contact@clement-lefevre.fr";
}