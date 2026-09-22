const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".section-intro, .about-body, .work-card, .skill-row, .contact").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
