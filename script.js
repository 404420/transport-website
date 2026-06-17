const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const dropdownButton = document.querySelector('[data-dropdown-button]');
const dropdownParent = dropdownButton?.closest('.has-dropdown');

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

dropdownButton?.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = dropdownParent?.classList.toggle('is-open');
  dropdownButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

document.addEventListener('click', (event) => {
  if (!dropdownParent?.contains(event.target)) {
    dropdownParent?.classList.remove('is-open');
    dropdownButton?.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dropdownParent?.classList.remove('is-open');
    dropdownButton?.setAttribute('aria-expanded', 'false');
  }
});
