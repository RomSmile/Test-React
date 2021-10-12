/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './ListOfCountries.scss';

type Props = {
  countries: Country[],
  setId: (number: string) => void,
  setShow: (bool: boolean) => void,
};

export const ListOfCountries: React.FC<Props> = (props) => {
  const { countries, setId, setShow } = props;

  return (
    <div className="container">
      <ul className="countries">
        <li className="countries__list countries__list--first">
          <div className="countries__number">№</div>
          <div className="countries__name">Country </div>
          <div className="countries__confirmed">Total confirmed</div>
        </li>
        {countries.map(country => (
          <li
            onClick={() => {
              setId(country.Country);
              setShow(true);
            }}
            key={country.ID}
            className="countries__list"
          >
            <div className="countries__number">{countries.indexOf(country) + 1}</div>
            <div className="countries__name">{country.Country}</div>
            <div className="countries__confirmed">{country.TotalConfirmed}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
