
//section smooth scroll
const contactBtn = document.getElementById('BtnContact');
const li00 = document.getElementById('li00');
const li01 = document.getElementById('li01');
const li02 = document.getElementById('li02');
const BtnTop = document.getElementById('BtnTop');

const servicesSection = document.getElementById('services');
const gallerySection = document.getElementById('gallery');
const feedbackSection = document.getElementById('feedback');
const contactSection = document.getElementById('contacts');
const headerSection = document.getElementById('header');

const smoothTo = (el) => {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

if (contactBtn) contactBtn.addEventListener('click', () => smoothTo(contactSection));
if (li00) li00.addEventListener('click', () => smoothTo(servicesSection));
if (li01) li01.addEventListener('click', () => smoothTo(gallerySection));
if (li02) li02.addEventListener('click', () => smoothTo(feedbackSection));
if (BtnTop) BtnTop.addEventListener('click', () => smoothTo(headerSection));

const toggleTopButton = () => {
  if (!BtnTop) return;
  if (window.scrollY > 200) {
    BtnTop.classList.add('is-visible');
  } else {
    BtnTop.classList.remove('is-visible');
  }
};

window.addEventListener('scroll', toggleTopButton);
toggleTopButton();
