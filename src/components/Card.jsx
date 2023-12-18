import React from 'react';
import { FaInfo, FaBullseye, FaSitemap, FaBuilding, FaImage } from 'react-icons/fa';

const Card = ({ icon, label, isFirstCard }) => {
  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    border: isFirstCard ? 'none' : '1px solid white', // No border for the first card
    borderRadius: '15px',
    background: isFirstCard ? 'gold' : 'transparent', // Golden background for the first card
  };

  const iconStyles = {
    fontSize: '2em',
    marginBottom: '5px',
    color: 'white', // White icon color
  };

  const textStyles = {
    color: 'white', // White text color
  };

  const renderIcon = () => {
    switch (icon) {
      case 'info':
        return <FaInfo style={iconStyles} />;
      case 'bullseye':
        return <FaBullseye style={iconStyles} />;
      case 'sitemap':
        return <FaSitemap style={iconStyles} />;
      case 'building':
        return <FaBuilding style={iconStyles} />;
      case 'image':
        return <FaImage style={iconStyles} />;
      default:
        return null;
    }
  };

  return (
    <div style={cardStyles}>
      {renderIcon()}
      <p style={textStyles}>{label}</p>
    </div>
  );
};

export default Card;
