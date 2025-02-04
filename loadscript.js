// script.js
document.getElementById('open-tabs').addEventListener('click', function () {
    const linksInput = document.getElementById('links').value;
    const linksArray = linksInput.split('\n').filter(link => link.trim() !== '');
  
    if (linksArray.length === 0) {
      alert('Please paste at least one YouTube link.');
      return;
    }
  
    // Open each link with a small delay to avoid browser blocking
    linksArray.forEach((link, index) => {
      setTimeout(() => {
        if (isValidYouTubeLink(link)) {
          window.open(link.trim(), '_blank');
        } else {
          alert(`Invalid YouTube link: ${link}`);
        }
      }, index * 1000); // Delay each tab by 500ms (1 seconds)
    });
  });
  
  function isValidYouTubeLink(link) {
    // Basic validation for YouTube links
    return link.includes('youtube.com/watch?v=') || link.includes('youtu.be/');
  }