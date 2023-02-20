window.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart'); 
    const para = document.getElementById('text');
    const likeUnlikePost = function() {
      if(heart.classList.contains('like')) {
        heart.classList.remove('like');
        heart.classList.add('unlike');
        para.textContent = ':(';
      } else {
        heart.classList.remove('unlike');
        heart.classList.add('like');
        para.textContent = ':)';
      }
    }
  
    heart.addEventListener('click', likeUnlikePost); 
  });