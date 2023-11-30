const BASE_URL = 'https://pixabay.com/api';
const API_KEY_PIXABAY = '40927479-979dc1e063dd35baea9918adf';
const loader = document.querySelector('.loader');
const guard = document.querySelector('.js-guard');
const container = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
let currentPage = 0;

export default {
  BASE_URL,
  API_KEY_PIXABAY,
  loader,
  guard,
  container,
  form,
  currentPage,
};
