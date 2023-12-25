export const basicFetch = async <returnType>(endpoint: string, customHeaders?: Record<string, string>): Promise<returnType> => {
  const defaultHeaders = {};
  const headers = customHeaders ? {...defaultHeaders, ...customHeaders} : defaultHeaders;
  const response = await fetch(endpoint, {
    headers: headers
  });

  if (!response.ok) throw new Error('Error occured');

  const data = await response.json();

  return data;
}
