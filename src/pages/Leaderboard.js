import React from 'react';
import { leaderboard } from '../assets/data';

const Leaderboard = () => {
  leaderboard.sort((a, b) =>
    a.contributions > b.contributions
      ? -1
      : b.contributions > a.contributions
      ? 1
      : 0
  );

  return (
    <div className='container-fluid mt-3'>
      <h1>Leader Board</h1>
      <p>
        These are users that provided the most missing fields in the past 30
        days. Well done!
      </p>

      <table className='table table-striped table-hover'>
        <thead className='table-light'>
          <tr>
            <th scope='col'>Position</th>
            <th scope='col'>Name</th>
            <th scope='col'>Contributions</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((person, index) => (
            <tr>
              <th scope='row'>{index + 1}</th>
              <td>{person.name}</td>
              <td>{person.contributions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
