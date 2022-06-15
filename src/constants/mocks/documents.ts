const category = 'Общие документы';
interface IDocument {
  id: number;
  category: string;
  name: string;
  date: Date;
  number: number;
  downloadLink: string;
  size: string;
}

export const documents: IDocument[] = [
  {
    id: 1,
    category: category,
    name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
    date: new Date('07-20-2021'),
    number: 1226,
    downloadLink: '/',
    size: '(469 кб)',
  },
  {
    id: 2,
    category: category,
    name: 'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
    date: new Date('09-22-2020'),
    number: 468,
    downloadLink: '/',
    size: '(10.81 мб)',
  },
  {
    id: 3,
    category: category,
    name: 'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62 Административный регламент ПРИКАЗ от 21 февраля 2019 года N62',
    date: new Date('02-21-2019'),
    number: 62,
    downloadLink: '/',
    size: '(2.25 мб)',
  },
  {
    id: 4,
    category: category,
    name: 'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
    date: new Date('12-20-2017'),
    number: 1594,
    downloadLink: '/',
    size: '(2.07 мб)',
  },
  {
    id: 5,
    category: category,
    name: 'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
    date: new Date('12-31-2015'),
    number: 622,
    downloadLink: '/',
    size: '(4.69 мб)',
  },
];
