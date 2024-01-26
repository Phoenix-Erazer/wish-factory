import { Link } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-bootstrap";

import './Donate.scss';
import { Requisite } from "../Requisite/Requisite";

export const Donate = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="donate">
      <h2 className="donate__title">Donate</h2>
      <div className="donate__top">
        <div className="donate__top--filters">
          <span className="donate__top--item">Single donation</span>
          <span className="donate__top--item">Mounthly donation</span>
        </div>

        <Form>
          <Form.Check
            className="donate__check"
            type="switch"
            id="custom-switch"
            label="I am located abroad"
          />
        </Form>
      </div>
      <section className="donate__fields">
        <div className="donate__amount">
          <div className="donate__amount--top">
            <input
              type="text"
              value={value}
              className="donate__amount--top-sum"
            />
            <span className="donate__amount--top-currency">UAH</span>
          </div>
          <div className="donate__amount--middle">
            <button
              className="donate__amount--middle-btn"
              onClick={() => setValue((prev) => prev + 200)}
            >
              +200 UAH
            </button>
            <button
              className="donate__amount--middle-btn"
              onClick={() => setValue((prev) => prev + 500)}
            >
              +500 UAH
            </button>
            <button
              className="donate__amount--middle-btn"
              onClick={() => setValue((prev) => prev + 1000)}
            >
              +1000 UAH
            </button>
          </div>

          <Link to="/" className="donate__amount--btn">
            Donate now
          </Link>
        </div>

        <div className="donate__requisites">
          <h1 className="donate__requisites--title">Requisites</h1>
          <h2 className="donate__requisites--subtitle">
            SWIFT transfers from abroad
          </h2>
          <p className="donate__requisites--desc">
            BENEFICIARY Wish Factory Foundation Purpose of payment: Charitable
            contribution to fundraising for children or the elderly
          </p>

          <div className="donate__requisites--items">
            <Requisite
              currrency="US dollars (USD)"
              req="UA903052990000026001026701793"
            />
            <Requisite
              currrency="Euros (EUR)"
              req="UA873052990000026009016700374"
            />
            <Requisite
              currrency="Polish zloty (PLN)"
              req="UA893052990000026006046713786"
            />
            <Requisite
              currrency="Czech koruna (CZK)"
              req="UA873052990000026009016701458"
            />
            <Requisite
              currrency="Pound Sterling (GBP)"
              req="UA093052990000026009046718897"
            />
            <Requisite
              currrency="Swiss francs (CHF)"
              req="UA103052990000026005006714660"
            />
            <Requisite
              currrency="Swedish krona (SEK)"
              req="UA553052990000026005046714634"
            />
            <Requisite
              currrency="Norwegian krone (NOK)"
              req="UA853052990000026000006712020"
            />
          </div>
        </div>
      </section>
    </div>
  );
}