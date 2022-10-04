import gsap from "https://cdn.skypack.dev/gsap@3.6.1";


var text = document.querySelector(".separator div p");



gsap.to(text, {
    scrollTrigger: {
        trigger: text,
        start: "top top",
        // markers: true,
        end: () => 0,
        scrub: true,
        invalidateOnRefresh: true
    },
    y: -innerHeight,
    ease: "ease",
})

var nom = document.querySelector("#suisJe");

gsap.to(nom, {
    scrollTrigger: {
        trigger: text,
        start: "top top",
        // markers: true,
        end: () => 0,
        scrub: true,
        invalidateOnRefresh: true
    },
    x: -50,
    ease: "ease",
});

var devWeb = document.querySelector("#devWeb");

gsap.to(devWeb, {
    scrollTrigger: {
        trigger: text,
        start: "top top",
        // markers: true,
        end: () => 0,
        scrub: true,
        invalidateOnRefresh: true
    },
    x: 200,
    ease: "ease",
});

var fullStack = document.querySelector("#fullStack");

gsap.to(fullStack, {
    scrollTrigger: {
        trigger: text,
        start: "top top",
        // markers: true,
        end: () => 0,
        scrub: true,
        invalidateOnRefresh: true
    },
    x: -150,
    ease: "ease",
});

var p1 = document.querySelector("#presentation p:nth-of-type(1)");
var autrePartie = document.querySelector("#autrePartie");

gsap.to(p1, {
    scrollTrigger: {
        trigger: autrePartie,
        start: 900,
        // pin: true,
        // markers: true,
        end: () => autrePartie.offsetWidth + 1500,
        scrub: true,
        invalidateOnRefresh: true
    },
    x: -150,
    y: 350,
    ease: "ease",
});

var p2 = document.querySelector("#presentation p:nth-of-type(2)");

gsap.to(p2, {
    scrollTrigger: {
        trigger: autrePartie,
        start: 900,
        // pin: true,
        // markers: true,
        end: () => autrePartie.offsetWidth + 1500,
        scrub: true,
        invalidateOnRefresh: true
    },
    x: -50,
    y: -100,
    ease: "ease",
});


var text2 = document.querySelector(".separator2 div p");



gsap.to(text2, {
    scrollTrigger: {
        trigger: text2,
        start: 1500,
        // markers: true,
        end: () => 5000,
        scrub: true,
        invalidateOnRefresh: true
    },
    y: -innerHeight,
    ease: "ease",
})

var plane = document.querySelector("#autrePartie img");

gsap.to(plane, {
    scrollTrigger: {
        trigger: text2,
        start: 2800,
        // markers: true,
        end: () => 7000,
        scrub: true,
        invalidateOnRefresh: true
    },
    x: 1920,
    y: -800,
    rotation: 0,
    ease: "ease",
})