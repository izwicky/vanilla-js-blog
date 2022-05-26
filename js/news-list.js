import { apiRequest } from './api.js';

async function createNewsCard() {
   const newsData = await apiRequest();
   let html = '';

   newsData.forEach((news) => {
      const htmlCard = `<div class="blogCard">
                           <div class="cardImg">
                              <img src="https://via.placeholder.com/250" />
                           </div>
                           <div class="cardTitle">${news.title}</div>
                           <div class="cardExcerpt">
                           ${news.excerpt}
                           </div>
                           <div class="cardPublished">${news.published_date}</div>
                        </div>`;

      html += htmlCard;
   });

   const blogListContainer = document.querySelector('.blogListContainer');
   blogListContainer.innerHTML = html;
}

export { createNewsCard };
