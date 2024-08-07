const fetchResource = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Fetch failed');
    }
  }
  return null;
};

export default fetchResource;
