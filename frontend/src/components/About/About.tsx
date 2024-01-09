import './About.scss'

export const About = () => {
  return (
    <>
      <h2 className="about__title">About fond</h2>
      <section className="about">
        <div className="about__articles">
          <article className="about__article">
            We are a public organization that was created in 2022 to fulfill the
            dreams of children and the elderly.{" "}
          </article>
          <article className="about__article">
            <b style={{ fontWeight: "bold" }}>The foundation's mission:</b> to
            give happiness to the least vulnerable population groups. We believe
            that everyone deserves to live with joy and dignity, regardless of
            their age or circumstances.
          </article>
          <article className="about__article">
            That's why we organize various activities and events that bring
            smiles and laughter to our beneficiaries. Whether it's a birthday
            party, a trip to the zoo, a musical performance, or a visit from a
            celebrity, we make sure that every dream comes true.
          </article>
          <article className="about__article">
            We also provide support and guidance to the families and caregivers
            of our beneficiaries, helping them cope with the challenges and
            difficulties they face.
          </article>
          <article className="about__article">
            We are grateful for the generosity of your donations, the support of
            sponsors, and the hard work of volunteers, and partners, who make
            our work possible.
          </article>
        </div>
        <img
          className="about__figure--large"
          src="/img/figure.svg"
          alt="large figure"
        />
        <img
          className="about__figure--small"
          src="/img/figure.svg"
          alt="small figure"
        />
        <img className="about__img" src="/img/About fond.jpg" alt="fond" />
      </section>

      <section className="team">
        <h1>Our team</h1>
        <div className="team__wrapper">
          <div className="team__wrapper--item">
            <h2>Kyiv</h2>
            <p>Headquarters</p>
          </div>
          <div className="team__wrapper--item">
            <h2>2022</h2>
            <p>Year of establishment</p>
          </div>
          <div className="team__wrapper--item">
            <h2>60+</h2>
            <p>Volunteers</p>
          </div>
        </div>
      </section>
    </>
  );
}