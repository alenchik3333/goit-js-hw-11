//import PixabayAPi from "./js/pixabay-api.js";
import getPicturesByQuery from "./js/pixabay-api.js";
//import { rendeFunctions } from './js/render-functions';
import drawGallery from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loading = document.querySelector('.loading');
const form = document.querySelector('.search-form');
//const responce = getPicturesByQuery("sdsd");

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    loading.style.display = 'block';
    const responce = getPicturesByQuery(form.elements.query.value.toLowerCase());
    responce.then((responce) => {
        {
            if (responce.totalHits === 0) {
            iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                });
        }
            else {
                console.log(responce.total);
            //console.log(responce.hits[0].webformatURL);
            //console.log(responce.hits[0].likes);
            drawGallery(responce.hits);
          }     
        }
    
    }).catch(ex =>
    {
        console.log(ex);
        iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                });
    }).finally(() => {
        loading.style.display = 'none';
    })
});

