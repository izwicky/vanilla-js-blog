let API_URL = '../MOCK_DATA.json';

async function apiRequest() {
   const apiResult = await fetch(`${API_URL}`)
      .then((response) => {
         if (response.ok) {
            return response.json();
         } else {
            return Promise.reject(response);
         }
      })
      .then((data) => {
         return data;
      })
      .catch((error) => {
         console.log(error);
      });
   return apiResult;
}

async function fetchAllPosts() {
   return apiRequest();
}

async function fetchSinglePost(id) {
   return apiRequest(id);
}

export { fetchAllPosts, fetchSinglePost };
