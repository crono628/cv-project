import React, { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState(undefined);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(document.getElementById(`${props.id}`).value);
    setEdit(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setEdit(true);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  if (value === undefined || value === '' || edit) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            id={props.id}
            placeholder={props.placeholder}
            value={value}
          />
        </form>
      </>
    );
  } else {
    return (
      <>
        <div id={props.id} onClick={handleEdit}>
          {value}
        </div>
      </>
    );
  }
};

export default Input;
