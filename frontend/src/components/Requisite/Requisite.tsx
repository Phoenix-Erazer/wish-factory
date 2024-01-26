import './Requisite.scss';

type Props = {
  currrency: string,
  req: string,
};

export const Requisite: React.FC<Props> = ({ currrency, req }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(req);
    alert('requisite copied')
  }
  return (
    <div className="requisite">
      <div className="requisite__left">
        <h3 className="requisite__left--title">{currrency}</h3>
        <span className="requisite__left--req">
          {req}
        </span>
      </div>
      <button className="requisite__copy" onClick={handleCopy}>
        Copy 
        <img src="/img/copy.svg" alt="copy"/>
      </button>
    </div>
  )
};