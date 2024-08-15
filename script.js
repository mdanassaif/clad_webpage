document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('a[href="#getting-started"]');
    const codeBlocks = document.querySelectorAll('.code-block');
    
    getStartedBtn.addEventListener('click', function(e) {
      e.preventDefault();
      codeBlocks.forEach(block => block.style.display = 'block');
      document.querySelector('#getting-started').scrollIntoView({behavior: 'smooth'});
    });
  });