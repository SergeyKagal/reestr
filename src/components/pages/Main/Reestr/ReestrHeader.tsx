import React from 'react';

export const ReestrHeader = () => {
  return (
    <header className="reestr__header">
      <h2 className="reestr__header-title">Реестры</h2>
      <div className="reestr__header-control">
        <button className="reestr-filter button-32"></button>
        <button className="reestr-settings button-32"></button>
      </div>
    </header>
  );
};
