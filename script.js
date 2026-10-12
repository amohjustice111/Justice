const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
const modal = document.getElementById('loginModal');
document.getElementById('openLogin').addEventListener('click', () => {
  modal.hidden = false;
  document.getElementById('loginEmail').focus();
});
document.getElementById('closeLogin').addEventListener('click', () => modal.hidden = true);
modal.addEventListener('click', event => { if (event.target === modal) modal.hidden = true; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.hidden = true; });

document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('loginNotice').textContent =
    'Demo only: this form is not connected to a real account system. Add secure authentication before launch.';
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('AMOH JUSTICE website enquiry from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message);
  // Replace this placeholder with your preferred business email address.
  window.location.href = 'mailto:YOUR-EMAIL@example.com?subject=' + subject + '&body=' + body;
});
