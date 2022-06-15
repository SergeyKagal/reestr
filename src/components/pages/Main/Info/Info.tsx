import './Info.scss';

export const Info = () => {
  return (
    <section className="info__wrapper container">
      <div className="info__left-side">
        <div className="info__left-side-up">
          <h1 className="info__main-title">РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
          <p className="info__description">
            Единый реестр программ для электронных вычислительных машин и баз данных
          </p>
          <div className="info__text">
            <p className="soft-numbers">
              Включено ПО в реестр:
              <span> 13 438</span>
            </p>
            <p className="owner-numbers">
              Правообладателей:<span> 4 272</span>
            </p>
          </div>
        </div>
        <form className="info__search-bar">
          <input type="text" placeholder="Искать реестр..." />
          <button>Искать</button>
        </form>
      </div>
      <div className="info__right-side">
        <img src="../../../assets/images/info-logo.png" alt="reestr-screen" />
      </div>
    </section>
  );
};
