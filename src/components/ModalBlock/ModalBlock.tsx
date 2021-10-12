import React, { useEffect, useState } from 'react';
import { getCountry } from '../../api/api';
import heart from '../../images/heart.png';
import death from '../../images/death.png';
import recovered from '../../images/recovered.png';
import './Modalblock.scss';

interface Props {
  id: string,
  setShow: (bool: boolean) => void,
}

export const ModalBlock: React.FC<Props> = (props) => {
  const { id, setShow } = props;
  const [sumOfDeath, setDeath] = useState<number>(0);
  const [sumOfConfirmed, setConfirmed] = useState<number>(0);
  const [sumOfRecovered, setRecovered] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const response = await getCountry(id);

      let sumDeath = 0;
      let sumConfirmed = 0;
      let sumRecovered = 0;

      response.forEach((countries) => {
        sumDeath += countries.Deaths;
      });

      response.forEach((countries) => {
        sumConfirmed += countries.Confirmed;
      });

      response.forEach((countries) => {
        sumRecovered += countries.Recovered;
      });

      setDeath(sumDeath);
      setConfirmed(sumConfirmed);
      setRecovered(sumRecovered);
    })();
  }, []);

  return (
    <div className="modalContainer">
      <div className="modalContainer__modal-block">
        <h2 className="modalContainer__title">{id}</h2>
        <div className="modalContainer__item">
          <span>
            <img src={heart} alt="heart" />
            Total Confirmed
          </span>
          <span>{sumOfConfirmed}</span>
        </div>
        <div className="modalContainer__item">
          <span>
            <img src={death} alt="death" />
            Total Death
          </span>
          <span>{sumOfDeath}</span>
        </div>
        <div className="modalContainer__item">
          <span>
            <img src={recovered} alt="recovered" />
            total Recovered
          </span>
          <span>{sumOfRecovered}</span>
        </div>
        <button
          type="button"
          className="modalContainer__button"
          onClick={() => setShow(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};
