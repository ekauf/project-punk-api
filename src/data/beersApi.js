// const getBeers = async () => {
//   const fetchArray = [];

//   for (let index = 1; index <= 5; index++) {
//     const url = `https://api.punkapi.com/v2/beers?page=${index}&per_page=80`;
//     fetchArray.push(fetch(url));
//   }
//   const responses = await Promise.all(fetchArray);

//   const data = await Promise.all(
//     responses.map(async (element) => {
//       return await element.json();
//     })
//   );
// };

// export default getBeers;
