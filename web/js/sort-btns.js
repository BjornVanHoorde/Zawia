const verdiepingsdossiersBtn = document.getElementById('verdiepingsdossiers-btn');
const verdiepingsdossiers = document.getElementById('verdiepingsdossiers');
const themadossiersBtn = document.getElementById('themadossiers-btn');
const themadossiers = document.getElementById('themadossiers');
const escaperoomsBtn = document.getElementById('escaperooms-btn');
const escaperooms = document.getElementById('escaperooms');
const onderzoeksvragenBtn = document.getElementById('onderzoeksvragen-btn');
const onderzoeksvragen = document.getElementById('onderzoeksvragen');

verdiepingsdossiersBtn.addEventListener('click', () => {
  verdiepingsdossiers.classList.remove('hidden');
  themadossiers.classList.add('hidden');
  escaperooms.classList.add('hidden');
  onderzoeksvragen.classList.add('hidden');
});

themadossiersBtn.addEventListener('click', () => {
  themadossiers.classList.remove('hidden');
  verdiepingsdossiers.classList.add('hidden');
  escaperooms.classList.add('hidden');
  onderzoeksvragen.classList.add('hidden');
});

escaperoomsBtn.addEventListener('click', () => {
  escaperooms.classList.remove('hidden');
  verdiepingsdossiers.classList.add('hidden');
  themadossiers.classList.add('hidden');
  onderzoeksvragen.classList.add('hidden');
});

onderzoeksvragenBtn.addEventListener('click', () => {
  onderzoeksvragen.classList.remove('hidden');
  verdiepingsdossiers.classList.add('hidden');
  escaperooms.classList.add('hidden');
  themadossiers.classList.add('hidden');
});

