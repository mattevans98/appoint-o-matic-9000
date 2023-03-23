import React, { ReactElement, useState } from 'react';
import './App.scss';
import scenario1 from "./scenario1/Scenario1";
import Scenario1 from "./scenario1/Scenario1";
import Scenario2 from "./scenario2/Scenario2";

const App = (): ReactElement => {
    const [scenario, setScenario] = useState(-1);
    const scenarioArr: ReactElement[] = [<Scenario1/>, <Scenario2/>];

    return (
        <div className="App">
            <header className="App-header">
                Appoint-o-matic 9000 Prototypes
            </header>
            <main className="App-content">
                <div className="scenario-selector">
                    <h3>Select a scenario</h3>
                    <div className="scenario-buttons">
                        <button onClick={ () => setScenario(scenario !== 0 ? 0 : -1) }>Scenario 1</button>
                        <button onClick={ () => setScenario(scenario !== 1 ? 1 : -1) }>Scenario 2</button>
                        <button>Scenario 3</button>
                        <button>Scenario 4</button>
                    </div>
                    <div className="scenario-display">
                        { scenario === -1 ? <></> : scenarioArr[0] }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
