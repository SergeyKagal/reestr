export interface IDataItem {
  id: number;
  name: string;
  classCode: string;
  classSoft: string;
  registrationDate: Date;
  urlLink: string;
}

const classSoft: string[] = [
  'Системы управления базами данных',
  'Системы управления процессами организации',
  'Информационные системы для решения специфических отраслевых задач',
  'Прикладное программное обеспечение общего назначения',
  'Системы сбора, хранения, обработки, анализа, моделирования и визуализации mассивов данных',
  'Лингвистическое программное обеспечение',
  'Офисные приложения',
  'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
];

export const reestrData: IDataItem[] = [
  {
    id: 1,
    name: 'Система управления базами данных «Ред База Данных»',
    classCode: '02.09',
    classSoft: classSoft[0],
    registrationDate: new Date('01-29-2016'),
    urlLink: '/',
  },
  {
    id: 2,
    name: '1С:Школа.Информатика,11 класс',
    classCode: '04.11',
    classSoft: classSoft[1],
    registrationDate: new Date('01-29-2016'),
    urlLink: '/',
  },
  {
    id: 3,
    name: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
    classCode: '04.11',
    classSoft: classSoft[2],
    registrationDate: new Date('01-29-2016'),
    urlLink: '/',
  },
  {
    id: 4,
    name: '1С:Комплексная автоматизация 8',
    classCode: '04.11',
    classSoft: classSoft[1],
    registrationDate: new Date('02-20-2016'),
    urlLink: '/',
  },
  {
    id: 5,
    name: 'Электронный периодический справочник "Система ГАРАНТ"',
    classCode: '04.15',
    classSoft: classSoft[3],
    registrationDate: new Date('02-20-2016'),
    urlLink: '/',
  },
  {
    id: 6,
    name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
    classCode: '04.13',
    classSoft: classSoft[4],
    registrationDate: new Date('11-03-2016'),
    urlLink: '/',
  },
  {
    id: 7,
    name: 'ABBYY Lingvo',
    classCode: '04.07',
    classSoft: classSoft[5],
    registrationDate: new Date('03-11-2016'),
    urlLink: '/',
  },
  {
    id: 8,
    name: '1С-Битрикс24 (Компания)',
    classCode: '04.03',
    classSoft: classSoft[6],
    registrationDate: new Date('03-14-2016'),
    urlLink: '/',
  },
  {
    id: 9,
    name: '1С-Битрикс24 (Проект+)',
    classCode: '04.03',
    classSoft: classSoft[7],
    registrationDate: new Date('03-14-2016'),
    urlLink: '/',
  },
  {
    id: 10,
    name: '1С-Битрикс24 (Команда)',
    classCode: '04.03',
    classSoft: classSoft[4],
    registrationDate: new Date('03-14-2016'),
    urlLink: '/',
  },
];
