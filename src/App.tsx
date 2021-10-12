import React, { useState, useEffect } from 'react';
import { getCountries } from './api/api';
import './App.scss';
import { Header } from './components/Header/Header';
import { ListOfCountries } from './components/ListOfCountries/ListOfCountries';
import { ModalBlock } from './components/ModalBlock/ModalBlock';

export const App: React.FC = () => {
  const [countries, getListOfCountries] = useState<Country[]>([]);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await getCountries();

      let countriesList = response.Countries;

      if (name.length > 0) {
        countriesList = countriesList.filter(
          country => country.Country.toLowerCase().includes(name.toLocaleLowerCase()),
        );
      }

      getListOfCountries(countriesList);
    })();
  }, [name]);

  return (
    <div className="starter">
      <Header setName={setName} />
      <ListOfCountries countries={countries || []} setId={setId} setShow={setShow} />
      {show
        ? <ModalBlock id={id} setShow={setShow} />
        : ''}
    </div>
  );
};
