export const fetcher = async (url) => {
  return await (await fetch(url)).json();
};
