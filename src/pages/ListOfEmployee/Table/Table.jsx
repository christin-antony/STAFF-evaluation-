import React from 'react';

const Table = ({ name, position, office, age, date, salary }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{office}</td>
      <td>{age}</td>
      <td>{date}</td>
      <td>${salary}</td>
    </tr>
  );
};

export default Table;
