import React from 'react';

const Overview = (props) => {
  const { array } = props;

  return (
    <ul>
      {array.map((item) => {
        for (const keys in item) {
          const element = item[keys];

          return <li key={item.id}>{element}</li>;
        }
      })}
    </ul>
  );
};

export default Overview;
