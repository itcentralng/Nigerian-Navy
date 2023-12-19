import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update this line

import Cmd2 from './screens/Cmd2';
import Cmd1 from './screens/Cmd1';
import CmdExpand1 from './screens/CmdExpand1';
import CmdExpand2 from './screens/CmdExpand2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cmd2 />} />
        <Route exact path="/screen2" element={<Cmd1 />} />
        <Route exact path="/screen3" element={<CmdExpand1 />} />
        <Route exact path="/screen4" element={<CmdExpand2 />} />
      </Routes>
    </Router>
  );
};

export default App;
