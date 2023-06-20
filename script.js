 const element = document.querySelector('.animate__flash');
 function animateElement() {
     element.classList.add('animate__animated', 'animate__flash');
 }
 function resetAnimation() {
     element.classList.remove('animate__animated', 'animate__flash');
 }
 animateElement();
 element.addEventListener('animationend', resetAnimation);
 setInterval(animateElement, 2000);