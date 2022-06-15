import { reestrData } from '../../../../constants/mocks/reest-data-mock';

export const ReestrContent = () => {
  return (
    <ul className="reestr-data-list">
      {reestrData.map((dataItem) => (
        <li className="reestr-data-row" key={dataItem.id}>
          <div className="registration-number pl-34">#{dataItem.id}</div>
          <div className="softs-name">{dataItem.name}</div>
          <div className="code-class">{dataItem.classCode}</div>
          <div className="softs-class">{dataItem.classSoft}</div>
          <div className="date-registration">{dataItem.registrationDate.toLocaleDateString()}</div>
          <a className="softs-link" href={dataItem.urlLink}>
            Ссылка
          </a>
        </li>
      ))}
    </ul>
  );
};
