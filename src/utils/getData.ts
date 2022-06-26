import ky from 'ky';

export const fetchData = async (search: string) => {
  const searchParams = new URLSearchParams();
  searchParams.set('title', search);
  const response = await ky('http://localhost:4000/results', {
    searchParams: searchParams,
  });
  let body = await response.json();
  return body;
};
