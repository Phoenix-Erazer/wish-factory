import { Carousel } from "react-bootstrap";
import { FqA } from "../FqA/FqA";
import './Main.scss'

export const Main = () => {
  return (
    <div className="main">
      <section className="top">
        <div className="top__left">
          <h1 className="top__left--title">
            Let's make the world better together
          </h1>

          <a href="/" className="top__left--button">
            Fulfill a dream
          </a>
        </div>
        <div className="top__right">
          <img
            src="/img/Photoheart.jpg"
            alt="heart"
            style={{ backgroundColor: "#f2f4ff" }}
          />
          <img className="top__right--img-1" src="/img/Heart.svg" alt="heart" />
          <img
            className="top__right--img-2"
            src="/img/Heart2.svg"
            alt="heart"
          />
          <img
            className="top__right--img-3"
            src="/img/figure.svg"
            alt="figure"
          />
        </div>
      </section>
      <section className="fond">
        <h2 className="fond__title">Our fond </h2>
        <img className="fond__subimg" src="/img/Heart.svg" alt="heart" />

        <div className="fond__articles">
          <article className="fond__article">
            We are a public organization that was created in 2022 to fulfill the
            dreams of children and the elderly. The foundation's mission: to
            give happiness to the least vulnerable population groups. We believe
            that everyone deserves to live with joy and dignity, regardless of
            their age or circumstances.
          </article>
          <article className="fond__article">
            That's why we organize various activities and events that bring
            smiles and laughter to our beneficiaries. Whether it's a birthday
            party, a trip to the zoo, a musical performance, or a visit from a
            celebrity, we make sure that every dream comes true.
          </article>
        </div>
      </section>
      <section className="achievs">
        <h2 className="achievs__title">Achievements</h2>
        <div className="achievs__cards">
          <div className="achievs__card">
            <h2 className="achievs__card--title">140+</h2>
            <p className="achievs__card--text">fulfilled dreams of children</p>
          </div>
          <div className="achievs__card">
            <h2 className="achievs__card--title">110+</h2>
            <p className="achievs__card--text">fulfilled dreams of elderly</p>
          </div>
          <div className="achievs__card">
            <h2 className="achievs__card--title">60+</h2>
            <p className="achievs__card--text">
              volunteers involved in helping
            </p>
          </div>
          <div className="achievs__card">
            <h2 className="achievs__card--title">$21M+</h2>
            <p className="achievs__card--text">
              collected funds for our activities
            </p>
          </div>
        </div>

        <a href="/" className="achievs__button">
          View reports
        </a>
      </section>
      <section className="partners">
        <h2 className="partners__title">Our partners</h2>
        <div className="partners__logos">
          <img src="/img/partners/CocaCola.svg" alt="coca cola" />
          <img src="/img/partners/Pandora.svg" alt="pandora" />
          <img src="/img/partners/Uber.svg" alt="uber" />
          <img src="/img/partners/North.svg" alt="the north face" />
          <img src="/img/partners/Mi.svg" alt="mi" />
          <img src="/img/partners/Mango.svg" alt="mango" />
          <img src="/img/partners/zara.svg" alt="zara" />
        </div>
      </section>
      <section className="wait">
        <h1 className="wait__title">Wishes waiting</h1>
        <p className="wait__desc">
          Happiness given to a child or an elderly is the best "medicine". Help
          us grant more wishes!
        </p>
        <Carousel variant="dark" className="wait__carousel">
          <Carousel.Item>
            <div className="wait__cards">
              <div className="wait__card">
                <img src="/img/main cards/Wish.jpg" alt="card1" />
                <h2 className="wait__card--title">
                  I wish to have a mobile phone to call relatives
                </h2>
                <p className="wait__card--text">
                  Olena is a 72 years elderly lady and she can't buy a mobile
                  <a href="/" className="wish__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="wait__card">
                <img src="/img/main cards/Wish (1).jpg" alt="card2" />
                <h2 className="wait__card--title">
                  Wish to go to zoo for a first time to see a bear
                </h2>
                <p className="wait__card--text">
                  David is a 5-year-old boy and he wishes to visit on birthday
                  <a href="/" className="wwait__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="wait__card">
                <img src="/img/main cards/Wish (2).jpg" alt="card3" />
                <h2 className="wait__card--title">
                  Wish to get help with buying insulin for diabetes
                </h2>
                <p className="wait__card--text">
                  Oleksandra is a 80 years elderly lady and has a need
                  <a href="/" className="wait__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="wait__cards">
              <div className="wait__card">
                <img src="/img/main cards/Wish.jpg" alt="card1" />
                <h2 className="wait__card--title">
                  I wish to have a mobile phone to call relatives
                </h2>
                <p className="wait__card--text">
                  Olena is a 72 years elderly lady and she can't buy a mobile
                  <a href="/" className="wait__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="wait__card">
                <img src="/img/main cards/Wish (1).jpg" alt="card2" />
                <h2 className="wait__card--title">
                  Wish to go to zoo for a first time to see a bear
                </h2>
                <p className="wait__card--text">
                  David is a 5-year-old boy and he wishes to visit on birthday
                  <a href="/" className="wish__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="wait__card">
                <img src="/img/main cards/Wish (2).jpg" alt="card3" />
                <h2 className="wait__card--title">
                  Wish to get help with buying insulin for diabetes
                </h2>
                <p className="wait__card--text">
                  Oleksandra is a 80 years elderly lady and has a need
                  <a href="/" className="wish__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="wait__cards">
              <div className="wait__card">
                <img src="/img/main cards/Wish.jpg" alt="card1" />
                <h2 className="wait__card--title">
                  I wish to have a mobile phone to call relatives
                </h2>
                <p className="wait__card--text">
                  Olena is a 72 years elderly lady and she can't buy a mobile
                  <a href="/" className="wait__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="wait__card">
                <img src="/img/main cards/Wish (1).jpg" alt="card2" />
                <h2 className="wait__card--title">
                  Wish to go to zoo for a first time to see a bear
                </h2>
                <p className="wait__card--text">
                  David is a 5-year-old boy and he wishes to visit on birthday
                  <a href="/" className="wait__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
              <div className="wait__card">
                <img src="/img/main cards/Wish (2).jpg" alt="card3" />
                <h2 className="wait__card--title">
                  Wish to get help with buying insulin for diabetes
                </h2>
                <p className="wait__card--text">
                  Oleksandra is a 80 years elderly lady and has a need
                  <a href="/" className="wait__card--button">
                    Read
                    <img src="/img/arrowup.svg" alt="" />
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <a href="/" className="wait__button">
          See wishes
        </a>
      </section>
      <section className="donation">
        <h1 className="donation__title">What do we do with your donation</h1>
        <p className="donation__desc">
          We use most of your donations to help children and the elderly to
          grant their wishes. There are main but not all wish types:
        </p>

        <div className="donation__cards">
          <div className="donation__card">
            <h3 className="donation__card--title">To-have</h3>
            <img src="/img/To-have.svg" alt="to have" />
            <p className="donation__card--desc">
              To have a phone, a dog. This is the most frequent request during
              the great war in Ukraine. Children in shelters and elderly people
              often lack basic things.
            </p>
          </div>
          <div className="donation__card">
            <h3 className="donation__card--title">To-meet</h3>
            <img src="/img/To-meet.svg" alt="to have" />
            <p className="donation__card--desc">
              To meet celebrities, Youtuber, politician,s or a singer. Other
              people we are inspired by give a lot of support and strength.
            </p>
          </div>
          <div className="donation__card">
            <h3 className="donation__card--title">To-go</h3>
            <img src="/img/To-go.svg" alt="to have" />
            <p className="donation__card--desc">
              To go to a sports event, park, zoo, or concert. Children and
              elderly people want to visit many places, but they do not always
              have the opportunity to do so.
            </p>
          </div>
          <div className="donation__card">
            <h3 className="donation__card--title">To-be</h3>
            <img src="/img/To-be.svg" alt="to have" />
            <p className="donation__card--desc">
              To be a policeman, doctor, chef and so on. Most often, this
              activity interests children, because they want to learn about the
              world and themselves through it.
            </p>
          </div>
        </div>

        <a href="/" className="donation__button">
          Donate now
        </a>
      </section>
      <section className="questions">
        <h1 className="questions__title">FQAs</h1>
        <FqA
          title="Whose dreams are we making come true?"
          text="Any child from 3 to 18 years old or an elderly person from 60 years old in need has the opportunity to turn to us to make their dreams come true. The dreamer himself or his relatives can apply for the realization of a dream."
        />
        <FqA
          title="Where can I make a dream come true?"
          text="We receive and process requests for the realization of dreams throughout Ukraine and in more than 20 regions."
        />
        <FqA
          title="Can I deliver the gift in person?"
          text="Yes, you can deliver the gift in person. When searching for a dream, you need to select the Personal filter and reserve the selected dream."
        />
        <FqA
          title="What if I can't make a chosen dream come true in person?"
          text="If you can't deliver the gift in person, you can donate and request a photo or video report of the commission of the chosen dream. Our volunteers will make it for you and send you photo and video recording of presenting a dream."
        />
        <FqA
          title="By when do I have to deliver the gift?"
          text="The deadline for all dreams is a month but if you need longer terms you can discuss it with our who will contact you and clarify questions about the chosen dream."
        />
        <FqA
          title="Can I send a donation to make children's or elderly dreams come true without choosing a specific dream?"
          text="Yes, you can send a donation to make children's or elderly dreams come true without choosing a specific dream. In this case, we will include your help to one of wish categories To-have, To-meet, To-go, To-be, Other."
        />
        <FqA
          title="What happens after filling out the dream submission form?"
          text="News about the status of your application will be sent to the e-mail address you specified. Please also check your spam folder.

A decision on your request may take from 2 working days to a month, depending on many factors, including: the amount of charitable contributions received, the number of incoming requests to the fund, the time it takes to verify requests, and the availability of all the necessary details in the request."
        />
        <FqA
          title="How do the dreams appear on the website?"
          text="After receiving your application, we process and check the information. After that, we contact the applicant and clarify the details. After clarifying all the missing details, our collaborator places the dream on our website."
        />
        <FqA
          title="How to make sure that charitable contributions are not stolen?"
          text="Every year we prepare official reports that are checked by state authorities. The reports are publicly available on the website in the Reports section."
        />
      </section>
    </div>
  );
}