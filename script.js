const fading_items = document.querySelectorAll(".fade-in");

const FadeInOptions = {
  threshold: 0,
};

const FadeInOnScroll = new IntersectionObserver(function(
  items,
) {
  items.forEach(item => {
    if (!item.isIntersecting) {
      return;
    } else {
      item.target.classList.add("appear");
    }
  });
},
FadeInOptions);


fading_items.forEach(fade_item => {
  FadeInOnScroll.observe(fade_item);
});
