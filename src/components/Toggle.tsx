import React from 'react';
import "../styles/Toggle.css";

const Toggle = () => {
  return (
    <>
      <input
        className="react-toggle-checkbox"
        id={`react-toggle-new`}
        type="checkbox"
      />
      <label
        className="react-toggle-label"
        htmlFor={`react-toggle-new`}
      >
        <span className={`react-toggle-button`} />
      </label>
    </>
  );
};

export default Toggle;