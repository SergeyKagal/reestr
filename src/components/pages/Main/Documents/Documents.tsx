import { DocumentContent } from './DocumentContent';
import { DocumentContentHeader } from './DocumentContentHeader';
import { DocumentHeader } from './DocumentHeader';

export const Documents = () => {
  return (
    <section className="document container document__wrapper pad-top-bottom">
      <DocumentHeader />
      <div className="document__content">
        <DocumentContentHeader />
        <DocumentContent />
      </div>
    </section>
  );
};
