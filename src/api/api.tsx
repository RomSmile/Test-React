export const getCountries = async (): Promise<Api> => {
  const response = await fetch('https://api.covid19api.com/summary');

  return response.json();
};

export const getCountry = async (country: string): Promise<NewCountry[]> => {
  const response = await fetch(`https://api.covid19api.com/dayone/country/${country}`);

  return response.json();
};
