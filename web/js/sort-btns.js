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
  verdiepingsdossiersBtn.classList.add('active');
  themadossiers.classList.add('hidden');
  themadossiersBtn.classList.remove('active');
  escaperooms.classList.add('hidden');
  escaperoomsBtn.classList.remove('active');
  onderzoeksvragen.classList.add('hidden');
  onderzoeksvragenBtn.classList.remove('active');
});

themadossiersBtn.addEventListener('click', () => {
  themadossiers.classList.remove('hidden');
  themadossiersBtn.classList.add('active');
  verdiepingsdossiers.classList.add('hidden');
  verdiepingsdossiersBtn.classList.remove('active');
  escaperooms.classList.add('hidden');
  escaperoomsBtn.classList.remove('active');
  onderzoeksvragen.classList.add('hidden');
  onderzoeksvragenBtn.classList.remove('active');
});

escaperoomsBtn.addEventListener('click', () => {
  escaperooms.classList.remove('hidden');
  escaperoomsBtn.classList.add('active');
  verdiepingsdossiers.classList.add('hidden');
  verdiepingsdossiersBtn.classList.remove('active');
  themadossiers.classList.add('hidden');
  themadossiersBtn.classList.remove('active');
  onderzoeksvragen.classList.add('hidden');
  onderzoeksvragenBtn.classList.remove('active');
});

onderzoeksvragenBtn.addEventListener('click', () => {
  onderzoeksvragen.classList.remove('hidden');
  onderzoeksvragenBtn.classList.add('active');
  verdiepingsdossiers.classList.add('hidden');
  verdiepingsdossiersBtn.classList.remove('active');
  escaperooms.classList.add('hidden');
  escaperoomsBtn.classList.remove('active');
  themadossiers.classList.add('hidden');
  themadossiersBtn.classList.remove('active');
});

