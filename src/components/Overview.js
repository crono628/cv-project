import React from 'react';
import Input from './Input';
import uniqid from 'uniqid';

const Overview = (props) => {
  const { information } = props;

  return (
    <ul>
      {information.map((info) => {
        return (
          <li key={info.id}>
            <Input placeholder="Info" id={uniqid()} />
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
