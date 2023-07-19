const photos = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
  'image11.jpg',
  'image12.jpg'

  // Add more image URLs here provided by the client
  // Example: 'https://example.com/images/image4.jpg', 'https://example.com/images/image5.jpg', ...
];

function createPhotoCards() {
  const gallery = document.getElementById('gallery');

  photos.forEach((photoUrl) => {
    const photoCard = document.createElement('div');
    photoCard.className = 'photo-card';

    const photoImg = document.createElement('img');
    photoImg.src = photoUrl;

    photoCard.appendChild(photoImg);
    gallery.appendChild(photoCard);
  });
}

// Wait for the DOM content to load before creating photo cards
document.addEventListener('DOMContentLoaded', createPhotoCards);
