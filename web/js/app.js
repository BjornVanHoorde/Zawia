// Rich Text Editor
const editor = document.querySelectorAll('.editor');

editor.forEach(element => {
  if (element) {
    new FroalaEditor(element, {
      heightMin: 150,
    })
  }
});