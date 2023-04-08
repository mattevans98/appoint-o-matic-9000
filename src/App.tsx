import React, { ReactElement } from 'react';
import './App.scss';
import Scenario1 from "./scenario1/Scenario1";
import Scenario2 from "./scenario2/Scenario2";
import Scenario3 from "./scenario3/Scenario3";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = (): ReactElement => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Scenario1/> }/>
                <Route path="/scenario2" element={ <Scenario2/> }/>
                <Route path="/scenario3" element={ <Scenario3/> }/>
            </Routes>
        </Router>
    );
}

export default App;
