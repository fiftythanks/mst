// When a list item is clicked, it acts as if the link inside it were clicked
document.querySelectorAll('nav li').forEach((li) => {
  const a = li.querySelector('a');
  li.addEventListener('click', () => a.click());
});
