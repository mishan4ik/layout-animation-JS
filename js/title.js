
/* Title */

function Title(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('title');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(Title, options);
  let elements = document.querySelectorAll('.title_text_block');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

