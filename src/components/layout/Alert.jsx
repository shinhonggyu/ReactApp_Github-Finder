import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContaxt';

const Alert = () => {
  const alertContaxt = useContext(AlertContext);

  const { alert } = alertContaxt;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Alert;
