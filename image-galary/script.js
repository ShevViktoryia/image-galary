import './index.html';
import './assets/sass/pages/_index.sass';
import getImages from './assets/scripts/getImages';

getImages();

const input_search = document.querySelector('#input-search');
const search_icon = document.querySelector('#search-icon');
search_icon.onclick = () => {
  if(input_search.value) {
    getImages(`https://api.unsplash.com/search/photos?query=${input_search.value}&per_page=18&orientation=landscape&client_id=iaxSnSV_heXYiXqX0CRn3No0xvCxJyq5zRIcCgtKWG8`)
  }
}

document.onkeydown = e => {
  if(e.key === 'Enter') {
    if(input_search.value) {
      getImages(`https://api.unsplash.com/search/photos?query=${input_search.value}&per_page=18&orientation=landscape&client_id=iaxSnSV_heXYiXqX0CRn3No0xvCxJyq5zRIcCgtKWG8`)
    }
  }
}