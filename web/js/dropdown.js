const dropdown = document.querySelector('.header-dropdown');
const dropdownBtn = document.querySelector('.dropdown__btn');

dropdownBtn.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});

