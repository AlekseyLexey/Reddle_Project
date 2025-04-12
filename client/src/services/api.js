export default async function fetchingData(url) {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}
