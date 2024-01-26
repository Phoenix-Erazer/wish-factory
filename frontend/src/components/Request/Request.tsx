import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./Request.scss";
import { useState } from "react";

export const Request = () => {
  const [value, setValue] = useState('');
  return (
    <div className="request">
      <h2 className="request__title">How it works</h2>
      <div className="request__cards">
        <div className="request__card">
          <img src="/img/To-be.svg" alt="to be" />

          <div className="request__card--bottom">
            <span className="request__card--bottom-step">Step 1</span>
            <p className="request__card--bottom-desc">Submit an application</p>
          </div>
        </div>
        <div className="request__card">
          <img src="/img/To-have.svg" alt="to have" />

          <div className="request__card--bottom">
            <span className="request__card--bottom-step">Step 2</span>
            <p className="request__card--bottom-desc">
              We get in touch with you
            </p>
          </div>
        </div>
        <div className="request__card">
          <img src="/img/To-meet.svg" alt="to meet" />

          <div className="request__card--bottom">
            <span className="request__card--bottom-step">Step 2</span>
            <p className="request__card--bottom-desc">The wish begins</p>
          </div>
        </div>
      </div>

      <form className="request__form" action="/">
        <h2 className="request__form--title">Request</h2>

        <h4 className="request__form--subtitle">The applicant</h4>
        <div className="request__form--item">
          <span className="request__form--item-title">Who is applying</span>
          <select className="request__form--item-select">
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="Guardians">Guardians</option>
          </select>
        </div>
        <div className="request__form--item">
          <span className="request__form--item-title">
            Your name and surname
          </span>
          <input type="text" className="request__form--item-input" />
        </div>
        <div className="request__form--item">
          <span className="request__form--item-title">Contact number</span>
          <PhoneInput
            value={value}
            onChange={() => setValue}
            className="request__form--item-phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="request__form--item">
          <span className="request__form--item-title">Email</span>
          <input
            type="email"
            className="request__form--item-input"
            placeholder="example@site.com"
          />
        </div>
      </form>

      <form className="request__form" action="/">
        <h2 className="request__form--title">Whose wish to make come true</h2>
        <div className="request__form--item">
          <span className="request__form--item-title">The wish of </span>
          <select className="request__form--item-select">
            <option value="child">Child</option>
            <option value="father">Eldery</option>
            <option value="Guardians">Guardians</option>
          </select>
        </div>
        <div className="request__form--item">
          <span className="request__form--item-title">
            Name and surname of wish holder
          </span>
          <input type="text" className="request__form--item-input" />
        </div>
        <div className="request__form--item">
          <span className="request__form--item-title">
            Name and surname of wish holder
          </span>
          <label className="request__form--item-radio" htmlFor="button">
            <input type="radio" />
            Male
          </label>
          <label htmlFor="button" className="request__form--item-radio">
            <input type="radio" />
            Female
          </label>
        </div>

        <div className="request__form--item">
          <span className="request__form--item-title">The wish of </span>
          <input type="date" className="request__form--item-date" />
        </div>

        <div className="request__form--item">
          <span className="request__form--item-title">
            City or village name
          </span>
          <input type="text" className="request__form--item-input" />
        </div>
        <div className="request__form--item">
          <span className="request__form--item-title">Region</span>
          <input type="text" className="request__form--item-input" />
        </div>

        <div className="request__form--item">
          <span className="request__form--item-title">
            Describe what the wish is about
          </span>
          <input type="textarea" className="request__form--item-itext" />
        </div>
        <label className="request__form--item-photo" htmlFor="photo">
          Add a photo
          <img src="/img/clip.svg" alt="clip" />
          <input
            type="file"
            id="photo"
            accept=".jpg .jpeg"
            className="request__form--item-clip"
          />
        </label>

        <label htmlFor="checkbox" className="request__form--item-check">
          <input id="checkbox" type="checkbox" />
          Yes, I have read the offer contract and I consciously and voluntarily
          give my consent to the processing of my personal data.
        </label>

        <button className="request__form--submit" type="submit">
          Send a request
        </button>
      </form>
    </div>
  );
};
