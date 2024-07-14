import React, { useState, useEffect } from 'react';
import './Counter.css';

const MAX_COUNT = 300;
const INTERVAL_DURATION = 30; // 1 second in milliseconds

const Counter = () => {
  const [homesExchanged, setHomesExchanged] = useState(0);
  const [companiesExchanged, setCompaniesExchanged] = useState(0);
  const [clientsSatisfied, setClientsSatisfied] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHomesExchanged(homesExchanged => {
        if (homesExchanged < MAX_COUNT) return homesExchanged + 1;
        return homesExchanged;
      });
      setCompaniesExchanged(companiesExchanged => {
        if (companiesExchanged < MAX_COUNT) return companiesExchanged + 1;
        return companiesExchanged;
      });
      setClientsSatisfied(clientsSatisfied => {
        if (clientsSatisfied < MAX_COUNT) return clientsSatisfied + 1;
        return clientsSatisfied;
      });
    }, INTERVAL_DURATION);

    const timeout = setTimeout(() => clearInterval(interval), 60000); // Stop after 60 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-item">
        <h3>Homes Exchanged</h3>
        <p>{homesExchanged}+</p>
      </div>
      <div className="counter-item">
        <h3>Companies Exchanged</h3>
        <p>{companiesExchanged+ 300}+</p>
      </div>
      <div className="counter-item">
        <h3>Clients Satisfied</h3>
        <p>{clientsSatisfied + 100}+</p>
      </div>
    </div>
  );
};

export default Counter;
