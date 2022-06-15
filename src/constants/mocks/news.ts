export interface INews {
  id: number;
  imageUrl: string;
  newsTitle: string;
  newsDate: Date;
  newsContent: string;
}

export const newsList: INews[] = [
  {
    id: 1,
    imageUrl: 'news/news0.png',
    newsTitle: 'Технические работы 30.05.2022',
    newsDate: new Date('05-30-2022'),
    newsContent:
      'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...',
  },
  {
    id: 2,
    imageUrl: 'news/news1.png',
    newsTitle: 'Изменение справочника',
    newsDate: new Date('05-28-2022'),
    newsContent: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...',
  },
  {
    id: 3,
    imageUrl: 'news/news2.png',
    newsTitle: 'Технические работы 26.05.2022',
    newsDate: new Date('05-26-2022'),
    newsContent:
      'В связи с проведением технических работ 26.05.2022 с 15:00 могут наблюдаться пер...',
  },
  {
    id: 4,
    imageUrl: 'news/news3.png',
    newsTitle: 'Лицензирование в Беларуси',
    newsDate: new Date('05-25-2022'),
    newsContent: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...',
  },
  {
    id: 5,
    imageUrl: 'news/news4.png',
    newsTitle: 'Тестирование системы новостей Ед...',
    newsDate: new Date('05-20-2022'),
    newsContent: 'Тестирование системы новостей ЕРЛ.',
  },
  {
    id: 6,
    imageUrl: 'news/news5.png',
    newsTitle: 'Обновление версии реестра ПО',
    newsDate: new Date('05-18-2022'),
    newsContent: 'В новой версии доступны новые функции, которые упрощают использование сервис...',
  },
];
