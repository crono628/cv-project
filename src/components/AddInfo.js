import React, { useState } from 'react';
import Input from './Input';
import uniqid from 'uniqid';

const AddInfo = () => {
  const [info, setInfo] = useState([]);

  const addInput = () => {
    setInfo([
      ...info,
      <Input placeholder="Info" id={uniqid()} key={uniqid()} />,
    ]);
  };

  const deleteInput = () => {
    if ([...info].length > 0) {
      let array = [...info];
      let index = array.length - 1;
      array.splice(index, 1);
      setInfo(array);
    }
  };

  return (
    <div>
      {info}
      <button onClick={addInput}>Add</button>
      <button onClick={deleteInput}>Delete</button>
    </div>
  );
};

export default AddInfo;
