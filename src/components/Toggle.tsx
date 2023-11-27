import React from 'react';
import "../styles/Toggle.css";

const Toggle = ({ isOn, handleToggle}: any) => {
  return (
    <div>
      <input
      checked={isOn}
      onChange={handleToggle}
        className="react-toggle-checkbox"
        id={`react-toggle-new`}
        type="checkbox"
      />
      <label
        style={{background: isOn && '#3498db'}}
        className="react-toggle-label"
        htmlFor={`react-toggle-new`}
      >
        <span className={`react-toggle-button`} />
      </label>
      <h3>Self Generate Packet</h3>
    </div>
  );
};

export default Toggle;