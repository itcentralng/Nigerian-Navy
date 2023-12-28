import React from 'react';

const HeroSection2 = () => {
  
  const heroSectionStyles = {
    color: '#fff',
    padding: '40px',
    textAlign: 'center',
    borderRadius: '10px',
    marginTop: '50px',
  };

  const headingStyles = {
    fontSize: '2.5em',
    marginBottom: '20px',
    marginTop: '60px',
    color: "gold",
    fontWeight: 100
  };

  const paragraphStyles = {
    fontSize: '1.2em',
    marginBottom: '30px',
  };

  return (
    <div style={heroSectionStyles} className="hero-section">
      <h1 style={headingStyles}>The Nigerian Navy Command</h1>
      <p style={paragraphStyles}>
        "From successful maritime operations to humanitarian missions, our naval forces
        continue to uphold the highest standards of professionalism and excellence."
      </p>
    </div>
  );
};

export default HeroSection2;
