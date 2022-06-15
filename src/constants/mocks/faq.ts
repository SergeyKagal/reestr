interface IFaq {
  id: number;
  text: string;
  isOpen: boolean;
}

export const faq: IFaq[] = [
  { id: 1, text: 'Для подачи заявления необходимо подготовить', isOpen: false },
  { id: 2, text: 'Связь с оператором реестра', isOpen: false },
  {
    id: 3,
    text: 'Как подать заявление на включение программного обеспечения в реестр',
    isOpen: false,
  },
  { id: 4, text: 'Где можно подать заявление', isOpen: false },
  { id: 5, text: 'Как узнать мне причину отказа', isOpen: false },
  { id: 6, text: 'Что делать, если Вам отказали', isOpen: false },
  { id: 7, text: 'Изменение реестревой записи', isOpen: false },
];

export const answers: string[] = [
  'Данные для авторизации в личном кабинете.',
  'Квалифицированный сертификат ключа проверки электронной подписи.',
  'Сведения, документы и материалы в соответствии с Методическими рекомендациями.',
  'Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.',
];
