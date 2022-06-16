import { useState } from 'react';
import { answers, faq } from '../../../../constants/mocks/faq';
import './Faq.scss';

export const Faq = () => {
  const [faqs, setFaqs] = useState(faq);
  const clickHandler = (id: number) => {
    setFaqs(
      faqs.map((faq) => {
        if (id !== faq.id) {
          return faq;
        }
        return { ...faq, isOpen: !faq.isOpen };
      })
    );
  };

  return (
    <section className="faq faq__wrapper container pad-top-bottom" id="faq">
      <div className="faq__left-side">
        <h2 className="faq__title">Вопрос-ответ</h2>
      </div>
      <ul className="faq__right-side">
        {faqs.map((faqItem) => (
          <li key={faqItem.id} className="faq__list-item" onClick={() => clickHandler(faqItem.id)}>
            <div className="faq__list-item-content">
              <span className={faqItem.isOpen ? 'plus open' : 'plus'}></span>
              <span className="faq__list-item-text">{faqItem.text}</span>
            </div>

            {faqItem.isOpen && (
              <ol>
                {answers.map((answer, i) => (
                  <li key={i}>{answer}</li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
