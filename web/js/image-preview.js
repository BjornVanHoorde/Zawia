const image = document.getElementById('chosen-image');
const imageInput = document.getElementById('image');

imageInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      image.setAttribute('src', this.result);
    });

    reader.readAsDataURL(file);
  }
});
