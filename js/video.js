/* Content-Video */
function TextVideo(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('content2_show');
      }
    });
  }
  
  let optionContent2 = {
    threshold: [0.5] };
  let observerContent2 = new IntersectionObserver(TextVideo, optionContent2);
  let elementsContent2 = document.querySelectorAll('.block_text_content2');
  
  for (let elm of elementsContent2) {
    observerContent2.observe(elm);
  }

  /* Content-Video */
function Video(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('video_show');
       change.target.classList.add('video_show2');
      }
      if(change.target.classList.add('video_show')){

        classList.remove('video_show')
        change.target.classList.add('video_show2');
      }

    });
  }
  
  let optionVideo = {
    threshold: [0.5] };
  let observerVideo = new IntersectionObserver(Video, optionVideo);
  let elementsVideo = document.querySelectorAll('.block_video_content');
  
  for (let elm of elementsVideo) {
    observerVideo.observe(elm);
  }
