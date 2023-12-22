export const basicFetch = async <returnType>(endpoint: string): Promise<ReturnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error occured');

  const data = await response.json();

  return data;
}
