
/* Content */
function Content(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('content_show');
    }
  });
}

let optionContent = {
  threshold: [0.5] };
let observerContent = new IntersectionObserver(Content, optionContent);
let elementsContent = document.querySelectorAll('.block_text_content');

for (let elm of elementsContent) {
  observerContent.observe(elm);
}

/* imgContent */

function Imagefunc(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('image_rotate');
    }
  });
}

let optionImg = {
  threshold: [0.5] };
let observerImg = new IntersectionObserver(Imagefunc, optionImg);
let elementsImg = document.querySelectorAll('.block_img_content');

for (let elm of elementsImg) {
  observerImg.observe(elm);
}

