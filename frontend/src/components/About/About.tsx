export const About = () => {
  return (
    <div className="about">
      <section className="about__top">
        <div className="about__top--left">
          <h2 className="about__top--left-title">About fond</h2>
          <div className="about__top--left-text">
            <p>
              We are a public organization that was created in 2022 to fulfill
              the dreams of children and the elderly.
            </p>
            <p>
              <b>The foundation's mission:</b> to give happiness to the least
              vulnerable population groups. We believe that everyone deserves to
              live with joy and dignity, regardless of their age or
              circumstances.
            </p>
            <p>
              That's why we organize various activities and events that bring
              smiles and laughter to our beneficiaries. Whether it's a birthday
              party, a trip to the zoo, a musical performance, or a visit from a
              celebrity, we make sure that every dream comes true.
            </p>
            <p>
              We also provide support and guidance to the families and
              caregivers of our beneficiaries, helping them cope with the
              challenges and difficulties they face.
            </p>
            <p>
              We also provide support and guidance to the families and
              caregivers of our beneficiaries, helping them cope with the
              challenges and difficulties they face.
            </p>
            <p>
              We are grateful for the generosity of your donations, the support
              of sponsors, and the hard work of volunteers, and partners, who
              make our work possible.
            </p>
          </div>
        </div>
        <div className="about__top--right">
          <img
            src="/img/figure large.svg"
            alt="img"
            className="about__top--right-img1"
          />
          <img
            src="/img/figuresmall.svg"
            alt="img"
            className="about__top--right-img2"
          />
          <img
            src="/img/About fond.jpg"
            alt="about"
            className="about__top--right-img3"
          />
        </div>
      </section>
      <section className="about__botttom">
        <div className="about__bottom--top">
          <h2 className="about__bottom--title">Our team</h2>
          <img src="/img/Heart.svg" alt="heart" />
        </div>
        <div className="about__bottom--bottom">
          <div className="about__bottom--wrapper">
            <div className="about__bottom--blocks">
              <div className="about__bottom--block">
                <h2 className="about__bottom--block-title">Kyiv</h2>
                <span className="about__bottom--block-text">Headquarters</span>
              </div>
              <div className="about__bottom--block">
                <h2 className="about__bottom--block-title">2022</h2>
                <span className="about__bottom--block-text">
                  Year of establishment
                </span>
              </div>
              <div className="about__bottom--block">
                <h2 className="about__bottom--block-title">60+</h2>
                <span className="about__bottom--block-text">Volunteers</span>
              </div>
            </div>
            <article className="about__bottom--article">
              More than 60 volunteers and employees of the foundation work every
              day so that every contribution of yours turns into valuable help
              for the most vulnerable categories of the population. Together, we
              can create a more compassionate and inclusive society for all.
            </article>
          </div>
        </div>
        <img src="/img/Our team.jpg" alt="photo" className="about__bottom--photo" />
      </section>
    </div>
  );
}