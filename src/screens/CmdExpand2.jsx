import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { FaArrowRight } from 'react-icons/fa'; 

const CmdExpand2 = () => {
  const mainContentStyles = {
    padding: '20px',
    margin: '0 auto',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const textContainerStyles = {
    width: '80%',
    color: 'white',
    textAlign: 'left',
  };

  const buttonContainerStyles = {
    textAlign: 'right',
  };

  const headContainerStyles = {
    color: 'white',
    textAlign: 'left',
    fontFamily: 'YourFontName',
    fontWeight: 100,
    fontSize: 45,
    margin: 0,
  };

  const commandText1 = `
  1 - Enhancement of more robust employment and deployment of vessels, personnel and material to effectively police and protect the numerous rigs, platforms, oil installations, creeks and adjoining rivers in the AOR of CNC.
`;

  const commandText2 = `
  2 - Facilitation of the integration and employment of land, maritime, air and special operations forces to gain and maintain control of the creeks, inland water ways, coastal and the high seas in the AOR of CNC.
  `;

  const commandText3 = `
  3 - Enhancement of NN capability at detecting, intercepting and interdicting of hostile actions or acts that tends to undermine security and legitimate economic activities in the AOR of CNC.
    `;

  const commandText4 = `
  4 - Increment in aid to civil authority through IS operations, humanitarian relief, Search and Rescue (SAR) amongst others in the AOR of CNC.
   `;

  const commandText5 = `
  5 -  Enhancement of confidence among citizens of the area in government’s efforts at creating a secured environment in the AOR of CNC.
  `;

  const commandText6 = `
  6 - Enhancement of the efforts at elimination of militancy, illegal bunkering, attacks on oil facilities and other illegal activities in the AOR of CNC. 
   `;

  return (
    <div className="cmdExpand1">
      <Navbar />
      <div style={mainContentStyles}>
        <div>
          <Card icon="info" label="ABOUT" />
          <Card icon="bullseye" label="OBJECTIVES" isFirstCard />
          <Card icon="sitemap" label="DEPARTMENTS" />
          <Card icon="building" label="STRUCTURES" />
          <Card icon="image" label="GALLERY" />
        </div>
        <div style={textContainerStyles}>
          <h2 style={headContainerStyles}>Benefits OF THE NIGERIAN NAVY CENTRAL COMMAND</h2>
          {/* <h2 style={headContainerStyles}>Established: February 2012</h2> */}
          <p>{commandText1}</p>
          <p>{commandText2}</p>
          <p>{commandText3}</p>
          <p>{commandText4}</p>
          <p>{commandText5}</p>
          <p>{commandText6}</p>
          <div style={buttonContainerStyles}>
            <button
              style={{
                outline: 'none',
                border: '2px solid #fff',
                padding: '10px',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                color: "#fff",
                textAlign: "right"
              }}
            >
              Next
              <FaArrowRight style={{ marginLeft: '5px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmdExpand2;
