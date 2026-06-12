const great = document.getElementById('great');
const showBtn = document.getElementById('showBtn');

showBtn.addEventListener('click', () => {
  great.textContent = 'JS changed this text: Have a wonderful birthday!';
});