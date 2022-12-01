const happyFace = document.querySelector('.happy');
const sadFace = document.querySelector('.sad');

// Add event listener
happyFace.addEventListener('click', () => {
  if (sadFace.classList.contains('sad')) {
    sadFace.classList.add('active');
    happyFace.classList.remove('active');
  }
});

sadFace.addEventListener('click', () => {
  if (happyFace.classList.contains('happy')) {
    happyFace.classList.add('active');
    sadFace.classList.remove('active');
  }
}); 