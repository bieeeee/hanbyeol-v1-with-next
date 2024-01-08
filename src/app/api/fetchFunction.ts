export const basicFetch = async <returnType>(endpoint: string, customHeaders?: Record<string, string|boolean>): Promise<returnType> => {
  const defaultHeaders = {};
  const headers = customHeaders ? {...defaultHeaders, ...customHeaders} : defaultHeaders;

  if (endpoint === undefined) throw new Error("Endpoint error")

  const response = await fetch(endpoint, {
    headers: headers,
    cache: 'no-store'
  });

  if (!response.ok) throw new Error('Error occured');

  const data = await response.json();

  return data;
}
