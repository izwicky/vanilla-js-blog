async function apiRequest() {
   const request = await fetch('../MOCK_DATA.json');

   if (request.status === 200) {
      const data = await request.json();
      return data;
   }

   if (request.status === 403) {
      console.error('Forbidden API access');
   }

   if (request.status === 404) {
      console.error('API not found');
   }
}

export { apiRequest };
