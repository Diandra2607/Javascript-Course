const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 400);
gambar.setAttribute('height', 230);
const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('type', 'submit');
