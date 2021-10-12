/// <reference types="react-scripts" />

interface Global {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
}

interface Country {
  ID: string,
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
}

interface NewCountry {
  ID: string,
  Country: string,
  CountryCode: string,
  Province: string,
  City: string,
  CityCode: string,
  Lat: string,
  Lon: string,
  Confirmed: number,
  Deaths: number,
  Recovered: number,
  Active: number,
  Date: string,
}

type Api = {
  ID: string,
  Message: string,
  Global: Global,
  Countries: Country[],
};
