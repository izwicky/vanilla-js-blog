import { fetchAllPosts } from './api.js';

async function createNewsCard() {
   const newsData = await fetchAllPosts();
   let html = '';

   newsData.forEach((news) => {
      const htmlCard = `<a href="/blog.html?=${news.id}">
                        <div class="blogCard" id="${news.id}">
                           <div class="cardImg">
                              <img src="https://via.placeholder.com/250" />
                           </div>
                           <div class="cardTitle">${news.title}</div>
                           <div class="cardExcerpt">
                           ${news.excerpt}
                           </div>
                           <div class="cardPublished">${news.published_date}</div>
                        </div>
                        </a>`;

      html += htmlCard;
   });
   const blogListContainer = document.querySelector('.blogListContainer');
   blogListContainer.innerHTML = html;
}
export { createNewsCard };
