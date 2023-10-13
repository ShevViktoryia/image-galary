export default async function getImages(url = 'https://api.unsplash.com/search/photos?query=spring&per_page=18&orientation=landscape&client_id=iaxSnSV_heXYiXqX0CRn3No0xvCxJyq5zRIcCgtKWG8') {
  const res = await fetch(url);
  const data = await res.json();
  const images_wrapper = document.querySelector('.images-wrapper');
  images_wrapper.innerHTML = '';
  data.results.forEach(item => {
    const image_container = document.createElement('div');
    image_container.className = 'image-container';
    image_container.style.backgroundImage = `url(${item.urls.regular})`;
    images_wrapper.append(image_container);
  });
}