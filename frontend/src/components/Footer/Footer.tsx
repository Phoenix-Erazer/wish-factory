import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__item">
        <h3 className="footer__item--title">Address</h3>
        <p className="footer__item--desc">0200, Kyiv, Ukraine</p>
        <p className="footer__item--desc">85/23 Saksahanskoho street</p>
      </div>
      <div className="footer__item">
        <h3 className="footer__item--title">Contacts</h3>
        <p className="footer__item--desc">+38 (050) 568-21-22</p>
        <p className="footer__item--desc">info@wishfactory.org.ua</p>
        <p className="footer__item--desc">Schedule: Mo-Fr from 9:00 to 18:00</p>
      </div>
      <div className="footer__item">
        <h3 className="footer__item--title">© Wish Factory</h3>
        <p className="footer__item--desc">
          Developed on a volunteer basis by a team:
        </p>
        <p className="footer__item--desc">
          <a
            href="https://www.linkedin.com/in/andrii-rashevskyi-908b04261/?locale=uk_UA"
            className="footer__item--desc-link"
          >
            Andrii Rashevskyi
          </a>
          <a
            href="https://www.linkedin.com/in/dariazayka/"
            className="footer__item--desc-link"
          >
            Daria Zaika
          </a>
          <a
            href="https://www.linkedin.com/in/kateryna-dzhyma/"
            className="footer__item--desc-link"
          >
            Kateryna Dzhyma
          </a>
          <a
            href="www.linkedin.com/in/viktor-hrygorash-08636a253"
            className="footer__item--desc-link"
          >
            Viktor Hrygorash
          </a>
        </p>
      </div>
    </footer>
  );
}