'use strict';

const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const listItem = e.target.closest('li');

  if (listItem) {
    const link = listItem.querySelector('a');
    const newImageUrl = link.href;
    const bigImage = document.getElementById('largeImg');

    bigImage.setAttribute('src', newImageUrl);
  }
});
