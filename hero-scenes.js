document.querySelector('.pause').addEventListener('click', event => {
  const paused = document.querySelector('.hero').classList.toggle('paused');
  event.currentTarget.setAttribute('aria-pressed', String(paused));
  event.currentTarget.textContent = paused ? 'Resume motion' : 'Pause motion';
});
const scenes = [...document.querySelectorAll('[data-shot]')];
const sceneButtons = [...document.querySelectorAll('[data-select]')];
const sceneLinks = [
  ['products.html#product-2', 'View sanitation equipment ↗'],
  ['products.html#product-1', 'View agricultural transport ↗'],
  ['products.html#product-5', 'View waste collection ↗']
];
sceneButtons.forEach((button, selected) => button.addEventListener('click', () => {
  scenes.forEach((scene, index) => {
    scene.hidden = selected !== index;
    scene.classList.toggle('is-active', selected === index);
  });
  sceneButtons.forEach((item, index) => item.setAttribute('aria-pressed', String(selected === index)));
  const cta = document.getElementById('hero-cta');
  [cta.href, cta.textContent] = sceneLinks[selected];
}));

