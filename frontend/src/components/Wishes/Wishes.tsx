import { Link } from "react-router-dom";
import { Wish } from "../../types/Wish";

import './Wishes.scss';

type Props = {
  wishes: Wish[],
};

export const Wishes: React.FC<Props> = ({wishes}) => {
  return (
    <div className="wishes">
      <h2 className="wishes__title">Wishes</h2>
      <div className="wishes__sort">
        <div className="wishes__sort--item">
          <h4 className="wishes__sort--item-title">Unfulfilled </h4>
          <span className="wishes__sort--item-title">{wishes.length}</span>
        </div>
        <div className="wishes__sort--item">
          <h4 className="wishes__sort--item-title">Fulfilled </h4>
          <span className="wishes__sort--item-title">{wishes.length}</span>
        </div>
        <div className="wishes__sort--item">
          <h4 className="wishes__sort--item-title">All</h4>
          <span className="wishes__sort--item-title">{wishes.length}</span>
        </div>
      </div>

      <div className="wishes__filter">
        <div className="wishes__filter--item">
          <span className="wishes__filter--item-title">Dream type</span>
          <img src="/img/arrowdown.svg" alt="arrowdown" />
        </div>
        <div className="wishes__filter--item">
          <span className="wishes__filter--item-title">Region</span>
          <img src="/img/arrowdown.svg" alt="arrowdown" />
        </div>
        <div className="wishes__filter--item">
          <span className="wishes__filter--item-title">Currency</span>
          <img src="/img/arrowdown.svg" alt="arrowdown" />
        </div>
        <div className="wishes__filter--item wishes__filter--item-budget">
          <span className="wishes__filter--item-title">Budget</span>
          <input type="range" />
        </div>
      </div>

      <div className="wishes__cards cards">
        {wishes.map((wish) => (
          <div className="wishes__card" key={wish.id}>
            <img
              className="wishes__card--img"
              src={wish.attachment}
            />
            <h4 className="wishes__card--title">{wish.title}</h4>
            <ul className="wishes__card--desc">
              <li className="wishes__card--desc-item">{wish.location}</li>
              <li className="wishes__card--desc-item">{wish.price}</li>
            </ul>

            {wish.is_activated && (
              <div className="wishes__card--reserve">Reserved for embody</div>
            )}

            <Link to="/fullfill" className="wishes__card--btn">
              Embody
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}