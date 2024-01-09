import { useState } from "react";
import './Dropdown.scss'

type Props = {
  title: string,
  text: string,
}

export const DropDown: React.FC<Props> = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <article
        className="dropdown__button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        {isOpen ? (
          <img src="/img/arrowup.svg" alt="arrow" />
        ) : (
          <img src="/img/arrrowdown.png" alt="arrow" />
        )}
      </article>
      {isOpen && (
        <p className="dropdown__content">
          {text}
        </p>
      )}
    </div>
  );
}