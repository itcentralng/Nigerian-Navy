import React from 'react';
import { FaInfo, FaBullseye, FaEnvelope, FaBuilding, FaPhone } from 'react-icons/fa';

const Card = ({ icon, label }) => {
  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    border: '1px solid #ccc',
    borderRadius: '15px',
  };

  const iconStyles = {
    fontSize: '2em',
    marginBottom: '5px',
  };


  const renderIcon = () => {
    switch (icon) {
      case 'info':
        return <FaInfo style={iconStyles} />;
      case 'bullseye':
        return <FaBullseye style={iconStyles} />;
      case 'envelope':
        return <FaEnvelope style={iconStyles} />;
      case 'building':
        return <FaBuilding style={iconStyles} />;
      case 'phone':
        return <FaPhone style={iconStyles} />;
      default:
        return null;
    }
  };

  return (
    <div style={cardStyles}>
      {renderIcon()}
      <p>{label}</p>
    </div>
  );
};

export default Card;
