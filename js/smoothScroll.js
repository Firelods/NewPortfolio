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