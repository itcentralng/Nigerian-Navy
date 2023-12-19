import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { FaArrowRight } from 'react-icons/fa'; 

const CmdExpand1 = () => {
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

  const commandText = `
  The Central Naval Command (CNC) was established in February 2012 with its headquarters at Brass, Bayelsa State.
  Being a new command without any offices or structures on the ground in Brass, a command’s temporary headquarters 
  commenced operations as HQ (Annex) CNC at Yenagoa in March 2012 with the first wave of officers and ratings. 
  The Command’s Area of Responsibility (AOR) extends from the area before River Benin entrance at Longitude 005 00′ E 
  to River Santa Barbara entrance at Longitude 006 30′ E covering a coastal distance of about 156nm. The coastal states 
  covered by the Command are Bayelsa and Delta states, while the inland states in the AOR include Edo, Kogi, and Anambra States.
  Based on the CNC established AOR, all the existing naval bases and establishments located in the states within the AOR became
  part of the CNC. These bases and establishments are NNS DELTA, NNS LUGARD, FOB ESCRAVOS, NNH WARRI, Naval Flying Unit, and
  Naval Outpost Onitsha. Others are the Nigerian Navy Research Institute in Amassoma and FOB FORMOSO in FORMOSO.
`;

  return (
    <div className="cmdExpand1">
      <Navbar />
      <div style={mainContentStyles}>
        <div>
          <Card icon="info" label="ABOUT" isFirstCard />
          <Card icon="bullseye" label="OBJECTIVES" />
          <Card icon="sitemap" label="DEPARTMENTS" />
          <Card icon="building" label="STRUCTURES" />
          <Card icon="image" label="GALLERY" />
        </div>
        <div style={textContainerStyles}>
          <h2 className='head-text'>THE NIGERIAN NAVY</h2>
          <h2 className='head-text'>CENTRAL COMMAND</h2>
          <p className='command-text'>{commandText}</p>
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

export default CmdExpand1;
