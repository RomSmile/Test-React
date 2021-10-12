import React from 'react';
import logo from '../../images/logo.png';
import './Header.scss';

type Props = {
  setName: (string: string) => void;
};

export const Header: React.FC<Props> = (props) => {
  const { setName } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content__logo-container">
            <img src={logo} alt="logo" className="header-content__logo"></img>
            <h1 className="header-content__title">STATISTIC</h1>
          </div>
          <input
            type="text"
            className="header-content__search"
            onChange={(event) => {
              setTimeout(() => {
                setName(event.target.value);
              }, 1500);
            }}
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
};
