function generateImage() {
  const text = document.getElementById('textInput').value;
  const imageContainer = document.getElementById('imageContainer');
  const placeholderImageUrl = 'https://source.unsplash.com/featured/?' + text;
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', placeholderImageUrl);
  imageElement.setAttribute('class', 'img-fluid');
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imageElement);
}