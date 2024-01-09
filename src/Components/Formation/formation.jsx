import "./formations.css";

const Formation = () => {
  return (
    <section className="formation" id="#formation">
        <h1 className="section__title">Formation</h1>
      <div className="card__container">
        <div className="card">
          <h2 className="formation__name">Edec University</h2>
          <h3 className="formation__specialitation">Computer Technology Engineerig</h3>
          <div className="formation__img-container">
            <img src="../../img/edecBanner.png" alt="Edec University" className="formation__img"/>
          </div>
          <span className="formation__duration">2022 - 2024</span>
        </div>
      </div>
      <div className="card__container">
        <div className="card">
          <h2 className="formation__name">Edec University</h2>
          <h3 className="formation__specialitation">Computer Technology Engineerig</h3>
          <div className="formation__img-container">
            <img src="../../img/edecBanner.png" alt="Edec University" className="formation__img"/>
          </div>
          <span className="formation__duration">2022 - 2024</span>
        </div>
      </div>
    </section>
  );
};

export default Formation;
