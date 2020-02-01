const triggers = document.querySelectorAll('a');

function formatLink() {
  const width = this.offsetWidth;
  const height = this.offsetHeight;
}

triggers.forEach(link => {
  link.addEventListener('mouseover', formatLink);
});
