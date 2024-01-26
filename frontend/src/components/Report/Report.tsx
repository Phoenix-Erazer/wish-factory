import { Table } from 'react-bootstrap';
import './Report.scss';
// import { Button } from '../Button/Button';
import { Wish } from '../../types/Wish';

type Props = {
  data: Wish[];
}

export const Report: React.FC<Props> = ({ data }) => {
  const toHave = data.filter(i => i.dream_type === 'to-have');
  const toHaveTotal =  toHave.map(i => i.price).reduce(function (a, b) {
    return a + b;
}, 0);
  const toMeet = data.filter(i => i.dream_type === 'to-meet');
  const toMeetTotal = toMeet.map(i => i.price)
    .reduce(function (a, b) {
    return a + b;
}, 0);
  const toGo = data.filter(i => i.dream_type === 'to-go');
  const toGoTotal = toGo.map(i => i.price)
    .reduce(function (a, b) {
    return a + b;
}, 0);
  const toBe = data.filter(i => i.dream_type === 'to-be');
  const toBeTotal = toBe.map(i => i.price)
    .reduce(function (a, b) {
    return a + b;
}, 0);
  

  return (
    <div className="report">
      <h1 className="report__title">Reports</h1>

      <div className="report__wrapper">
        <div className="report__filters">
          <span className="report__filters--item">Income</span>
          <span className="report__filters--item">Expenses</span>
        </div>
        <div className="report__filters">
          <span className="report__filters--year">Year:</span>
          <span className="report__filters--item">2022</span>
          <span className="report__filters--item">2023</span>
        </div>
      </div>

      <Table hover variant="light" className="report__table">
        <thead>
          <tr className="report__table--head">
            <th>Projects</th>
            <th>Planned projects</th>
            <th>Total amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr className="report__table--row">
            <td>To-have</td>
            <td>{toHave.length}</td>
            <td>{`${toHaveTotal},00`}</td>
            <td>UAH</td>
          </tr>
          <tr className="report__table--row">
            <td>To-meet</td>
            <td>{toMeet.length}</td>
            <td>{`${toMeetTotal},00`}</td>
            <td>UAH</td>
          </tr>
          <tr className="report__table--row">
            <td>To-go</td>
            <td>{toGo.length}</td>
            <td>{`${toGoTotal},00`}</td>
            <td>UAH</td>
          </tr>
          <tr className="report__table--row">
            <td>To-be</td>
            <td>{toBe.length}</td>
            <td>{`${toBeTotal},00`}</td>
            <td>UAH</td>
          </tr>
        </tbody>
      </Table>


    </div>
  );
}