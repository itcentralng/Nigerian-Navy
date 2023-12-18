import React from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image2.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>The Nigerian Navy Command</h1>
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
