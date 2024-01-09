import './Main.scss';
import picture from '../../img/Без имени.jpg'
import figure from '../../img/figure.svg'
import heart from '../../img/Heart.svg'
import cocacola from '../../img/CocaCola.svg'
import pandora from '../../img/Pandora.svg'
import uber from '../../img/Uber.svg'
import northFace from '../../img/NorthFace.svg'
import mi from '../../img/Mi.svg'
import mango from '../../img/Mango.svg'
import zara from '../../img/zara.svg'
import wish from '../../img/Wish.jpg';
import wish1 from '../../img/Wish (1).jpg';
import wish2 from '../../img/Wish (2).jpg';
import arrow from '../../img/arrow.svg'
import { DropDown } from '../DropDown/DropDown';

export const Main = () => {


  return (
    <>
      <section className="main">
        <div className="main__group">
          <h1 className="main__group--title">
            Let's make the world better together
          </h1>
          <img src={picture} alt="" className="main__group--img" />
        </div>

        <a href="/" className="main__button">
          Fullfill a dream
        </a>

        <img src={figure} alt="heart" className="main__img1" />
        <img src={heart} alt="heart" className="main__img2" />
      </section>

      <section className="fond">
        <h1 className="fond__title">Our fond</h1>
        <div className="fond__articles">
          <article className="fond__articles--article">
            We are a public organization that was created in 2022 to fulfill the
            dreams of children and the elderly. The foundation's mission: to
            give happiness to the least vulnerable population groups. We believe
            that everyone deserves to live with joy and dignity, regardless of
            their age or circumstances.
          </article>
          <article className="fond__articles--article">
            That's why we organize various activities and events that bring
            smiles and laughter to our beneficiaries. Whether it's a birthday
            party, a trip to the zoo, a musical performance, or a visit from a
            celebrity, we make sure that every dream comes true.
          </article>
        </div>
      </section>

      <section className="achieve">
        <h1 className="achieve__title">Achievements</h1>
        <div className="achieve__blocks">
          <div className="achieve__block">
            <h1 className="achieve__block--title">140+</h1>
            <p className="achieve__block--text">fulfilled dreams of children</p>
          </div>
          <div className="achieve__block">
            <h1 className="achieve__block--title">110+</h1>
            <p className="achieve__block--text">fulfilled dreams of elderly</p>
          </div>
          <div className="achieve__block">
            <h1 className="achieve__block--title">60+</h1>
            <p className="achieve__block--text">
              volunteers involved in helping
            </p>
          </div>
          <div className="achieve__block">
            <h1 className="achieve__block--title">$21M+</h1>
            <p className="achieve__block--text">
              collected funds for our activities
            </p>
          </div>
        </div>
        <a href="/" className="achieve__button">
          View reports
        </a>
      </section>

      <section className="partners">
        <h1 className="partners__title">Our partners</h1>
        <div className="partners__images">
          <img
            className="partners__images--img"
            src={cocacola}
            alt="CocaCola"
          />
          <img className="partners__images--img" src={pandora} alt="pandora" />
          <img className="partners__images--img" src={uber} alt="uber" />
          <img
            className="partners__images--img"
            src={northFace}
            alt="NorthFace"
          />
          <img className="partners__images--img" src={mi} alt="mi" />
          <img className="partners__images--img" src={mango} alt="mango" />
          <img className="partners__images--img" src={zara} alt="zara" />
        </div>
      </section>

      <section className="wait">
        <h1 className="wait__title">Wishes waiting</h1>
        <p className="wait__desc">
          Happiness given to a child or an elderly is the best "medicine". Help
          us grant more wishes!
        </p>
        <div className="wait__cards">
          <div className="wait__card">
            <img src={wish} alt="wish" className="wait__card--img" />
            <h2 className="wait__card--title">
              I wish to have a mobile phone to call relatives
            </h2>
            <div className="wait__card--bottom">
              <span className="wait__card--bottom-text">
                Olena is a 72 years elderly lady and she can't buy a mobile
              </span>

              <a href="/" className="wait__card--bottom-link">
                React
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
          <div className="wait__card">
            <img src={wish1} alt="wish" className="wait__card--img" />
            <h2 className="wait__card--title">
              Wish to go to zoo for a first time to see a bear
            </h2>
            <div className="wait__card--bottom">
              <span className="wait__card--bottom-text">
                David is a 5-year-old boy and he wishes to visit on birthday
              </span>

              <a href="/" className="wait__card--bottom-link">
                React
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
          <div className="wait__card">
            <img src={wish2} alt="wish" className="wait__card--img" />
            <h2 className="wait__card--title">
              Wish to get help with buying insulin for diabetes
            </h2>
            <div className="wait__card--bottom">
              <span className="wait__card--bottom-text">
                Oleksandra is a 80 years elderly lady and has a need
              </span>

              <a href="/" className="wait__card--bottom-link">
                React
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
        <a href="/" className="wait__button">
          See wishes
        </a>
      </section>

      <section className="actions">
        <h1 className="actions__title">What do we do with your donation</h1>

        <p className="actions__desc">
          We use most of your donations to help children and the elderly to
          grant their wishes. There are main wish types:
        </p>

        <div className="actions__cards">
          <div className="actions__card">
            <h2 className="actions__card--title">To-have</h2>
            <img src="/img/To-have.jpg" alt="to have" />
            <p className="actions__card--desc">
              To have a phone, a dog. This is the most frequent request during
              the great war in Ukraine. Children in shelters and elderly people
              often lack basic things.
            </p>
          </div>
          <div className="actions__card">
            <h2 className="actions__card--title">To-meet</h2>
            <img src="/img/To-meet.jpg" alt="to have" />
            <p className="actions__card--desc">
              To meet celebrities, Youtuber, politician,s or a singer. Other
              people we are inspired by give a lot of support and strength.
            </p>
          </div>
          <div className="actions__card">
            <h2 className="actions__card--title">To-go</h2>
            <img src="/img/To-go.jpg" alt="to go" />
            <p className="actions__card--desc">
              To go to a sports event, park, zoo, or concert. Children and
              elderly people want to visit many places, but they do not always
              have the opportunity to do so.
            </p>
          </div>
          <div className="actions__card">
            <h2 className="actions__card--title">To-be</h2>
            <img src="/img/To-go.jpg" alt="to go" />
            <p className="actions__card--desc">
              To be a policeman, doctor, chef and so on. Most often, this
              activity interests children, because they want to learn about the
              world and themselves through it.
            </p>
          </div>
        </div>
        <a href="/" className="actions__button">
          Donate now
        </a>
      </section>

      <section className="fqa">
        <h1 className="fqa__title">FQAs</h1>
        <DropDown
          title="Whose dreams are we making come true?"
          text="Any child from 2.5 to 18 years old or an elderly person from 60 years old in need has the opportunity to turn to us to make their dreams come true. The dreamer himself or his relatives can apply for the realization of a dream."
        />
        <DropDown
          title="Where can I make a dream come true?"
          text="If you can't deliver the gift in person, you can donate and request a photo or video report of the commission of the chosen dream. Our volunteers will make it for you and send you photo and video recording of presenting a dream."
        />
        <DropDown
          title="By when do I have to deliver the gift?"
          text="The deadline for all dreams is a month but if you need longer terms you can discuss it with our who will contact you and clarify questions about the chosen dream."
        />
        <DropDown
          title="Can I send a donation to make children's or elderly dreams come true without choosing a specific dream?"
          text="Yes, you can send a donation to make children's or elderly dreams come true without choosing a specific dream. In this case, we will include your help in one of To-have, To-meet, To-go, To-be dreams."
        />
        <DropDown
          title="What happens after filling out the dream submission form?"
          text="News about the status of your application will be sent to the e-mail address you specified. Please also check your spam folder.

          A decision on your request may take from 2 working days to a month, depending on many factors, including: the amount of charitable contributions received, the number of incoming requests to the fund, the time it takes to verify requests, and the availability of all the necessary details in the request."
        />
        <DropDown
          title="How do the dreams appear on the website?"
          text="After receiving your application, we process and check the information. After that, we contact the applicant and clarify the details. After clarifying all the missing details, our collaborator places the dream on our website."
        />
        <DropDown
          title="How to make sure that charitable contributions are not stolen?"
          text="Every year we prepare official reports that are checked by state authorities. The reports are publicly available on the website in the Reports section."
        />
      </section>
    </>
  );
}