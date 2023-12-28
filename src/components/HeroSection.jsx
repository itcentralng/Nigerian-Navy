import React from 'react';
import image1 from '../assets/images/image 3.png';
import image2 from '../assets/images/image 1.png';
import image3 from '../assets/images/image 2.png';
import image4 from '../assets/images/image 5.png';
import image5 from '../assets/images/image 4.png';

const HeroSection = () => {

  const headingStyles = {
    fontSize: '2.5em',
    marginBottom: '20px',
    marginTop: '60px',
    color: "gold",
    fontWeight: 100
  };

  return (
    <div className="hero-section">
      <h1 style={headingStyles}>The Nigerian Navy Commands</h1>
      <p>
        "From successful maritime operations to humanitarian missions, our naval forces
        continue to uphold the highest standards of professionalism and excellence."
      </p>
      <div className="image-container">
        <div>
          <img src={image1} alt="Image 1" />
          <p>THE NIGERIAN NAVY COMMANDS</p>
        </div>
        <div>
          <img src={image2} alt="Image 2" />
          <p>Nigerian Navy Central Command</p>
        </div>
        <div>
          <img src={image3} alt="Image 3" />
          <p>Naval Training Command</p>
        </div>
        <div>
          <img src={image4} alt="Image 4" />
          <p>Naval Doctrine Command</p>
        </div>
        <div>
          <img src={image5} alt="Image 5" />
          <p>Nigerian Navy Training Base/Command and NNS Quorra</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
