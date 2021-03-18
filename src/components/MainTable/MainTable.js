import './MainTable.scss';
import Colums from './Colums/Colums';
import Errorr from '../../img/error.png';

export default function MainTable({ data }) {
  const check =
    data[0].email === null ||
    data[0].phone === null ||
    data[0].full_name === null;
  return (
    <div>
      {check ? (
        <div className="div">
          <img src={Errorr} alt="" className="errorrr" />
          <h1>File is not correction</h1>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Full Name</td>
              <td>Phone</td>
              <td>Email</td>
              <td>Age</td>
              <td>Experience</td>
              <td>Yearly Income</td>
              <td>Has children</td>
              <td>License states</td>
              <td>Expiration date</td>
              <td>License number</td>
              <td>Duplicate with</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Colums data={item} id={index + 1} key={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
