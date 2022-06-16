import './Reestr.scss';
import { ReestrContent } from './ReestrContent';
import { ReestrContentHeader } from './ReestrContentHeader';
import { ReestrHeader } from './ReestrHeader';
import { ReestrPagination } from './ReestrPagination';

export const Reestr = () => {
  return (
    <section className="reestr container reestr__wrapper pad-top-bottom" id="reestr">
      <ReestrHeader />
      <div className="reestr__content">
        <ReestrContentHeader />
        <ReestrContent />
        <ReestrPagination />
      </div>
    </section>
  );
};
