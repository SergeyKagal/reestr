import React from 'react';
import './Reestr.scss';
import { ReestrContentHeader } from './ReestrContentHeader';
import { ReestrHeader } from './ReestrHeader';

export const Reestr = () => {
  return (
    <section className="reestr container reestr__wrapper pad-top-bottom">
      <ReestrHeader />
      <div className="reestr__content">
        <ReestrContentHeader />
      </div>
    </section>
  );
};
