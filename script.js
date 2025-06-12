function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}


let index = 0;

function slideNext() {
  const slider = document.getElementById('slider');
  const cardWidth = 320; // review-card width + margin
  const totalCards = slider.children.length;

  // Only move to next if not at end
  if (index < totalCards - 2) {
    index++;
  } else {
    index = 0; // Reset to start
  }

  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('coverPage').classList.add('hide');
  }, 1000); // 2000 ms = 2 seconds
});
