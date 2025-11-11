export const SingleApi = async ({ params }) => {
  try {
    const id = params.id; // 👈 get movie id from URL
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    return [ { show: data } ]; // 👈 match structure used in SingleMovie (because it uses load.map)
  } catch (error) {
    console.log(error);
    return null;
  }
};
