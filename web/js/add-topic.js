const addTopic = document.getElementById('add-topic');
const addTopicBtn = document.getElementById('add-topic-btn');
const addTopicCloseBtn = document.getElementById('add-topic-close-btn');

addTopicBtn.addEventListener('click', () => {
  addTopic.classList.remove('hidden');
});

addTopicCloseBtn.addEventListener('click', () => {
  addTopic.classList.add('hidden');
});

