import { createNewsCard } from './js/news-list.js';
import { blogRender } from './js/blog-page-render.js';

window.addEventListener('load', () => {
   let app = document.querySelector('[data-app]');
   let page = app.getAttribute('data-app');

   if (page === 'index') {
      createNewsCard();
   }

   if (page === 'blog') {
      blogRender();
   }
});
