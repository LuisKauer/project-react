export default async function loadPosts() {
  const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');

  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postResponse, photosResponse]);

  const postJason = await posts.json();
  const photosJason = await photos.json();

  const postAndPhotos = postJason
    .map((post, index) => ({ ...post, cover: photosJason[index].url }));
  return postAndPhotos;
}
