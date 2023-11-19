let currentSlideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.blog-item');
  const totalSlides = slides.length;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const blogContent = document.querySelector('.blog-content');
  
  currentSlideIndex += direction;
  
  if (currentSlideIndex < 0) {
    currentSlideIndex = 0;
  }

  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = totalSlides - 1;
  }

  const transformValue = -(currentSlideIndex * slideWidth);
  blogContent.style.transform = `translateX(${transformValue}px)`;
}

document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscription form submitted!'); 
});



/**/
function toggleFAQ(index) {
    var answers = document.querySelectorAll('.faq-answer');
    var answer = answers[index];
    var displayStyle = window.getComputedStyle(answer).display;
    answer.style.display = displayStyle === 'none' ? 'block' : 'none';
  }