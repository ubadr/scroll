
const sections = gsap.utils.toArray(".container section");
const container = document.querySelector(".container");
const texts = gsap.utils.toArray(".anim");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
  }
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");
  if(text.length === 0)  return 
  gsap.from(text, {
    y: -120,
    opacity: 0,
    duration: 1.9,
    ease: "elastic",
    stagger: 0.11,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
    }
  });
});
