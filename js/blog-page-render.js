import { fetchSinglePost } from './api.js';

async function blogRender() {
   const href = window.location.href;
   const id = parseInt(href.slice(href.indexOf('=') + 1));

   const newsData = await fetchSinglePost(id);

   if (!newsData) {
      document.querySelector('#pageContent').innerHTML = 'The blog is no longer available';
   }

   document.title = newsData[id].title;
   let pageContent = `<header>
                        <h1 id="blogTitle">${newsData[id].title}</h1>
                        <p id="blogPublished">${newsData[id].published_date}</p>
                     </header>
                     <article id="blogContent">${newsData[id].content}</article>`;

   const pageContentContainer = document.querySelector('#pageContent');
   pageContentContainer.innerHTML = pageContent;
}

blogRender();

export { blogRender };
