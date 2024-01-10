import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="adress">
        <p className="adress__title">Address</p>
        <article className="adress__path">0200, Kyiv, Ukraine</article>
        <article className="adress__path">0200, Kyiv, Ukraine</article>
      </section>

      <section className="adress">
        <p className="adress__title">Contacts</p>
        <article className="adress__path">+38 (050) 568-21-22</article>
        <article className="adress__path">info@wishfactory.org.ua</article>
        <article className="adress__path">
          Schedule: Mo-Fr from 9:00 to 18:00
        </article>
      </section>
      <section className="adress">
        <p className="adress__title">Address</p>
        <article className="adress__path">0200, Kyiv, Ukraine</article>
        <article className="adress__path">0200, Kyiv, Ukraine</article>
        <div className="adress__links">
          <a className="adress__links--link" href="https://www.linkedin.com/in/dariazayka/">Daria Zaika </a>
          <a className="adress__links--link" href="https://www.linkedin.com/in/andrii-rashevskyi-908b04261/?locale=uk_UA">
            Andrii Rashevskyi
          </a>

          <a className="adress__links--link" href="www.linkedin.com/in/viktor-hrygorash-08636a253">
            Victor Hryhorash 
          </a>
          <a className="adress__links--link" href="https://www.linkedin.com/in/kateryna-dzhyma">
            Kateryna Dzhyma
          </a>
        </div>
      </section>
    </footer>
  );
}