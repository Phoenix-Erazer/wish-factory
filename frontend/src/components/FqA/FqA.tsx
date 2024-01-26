import { useState } from "react";

type Props = {
  title: string,
  text: string,
};

export const FqA: React.FC<Props> = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="questions__inner">
      <h1 className="questions__title" onClick={() => setOpen(!open)}>
        {title}

        {open && <img src="/img/open.svg"/>}
      </h1>
      {open && <p className="questions__text">{text}</p>}
    </div>
  );
}