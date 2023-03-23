import React, { ReactElement } from 'react';
import './App.scss';

const App = (): ReactElement => {
    return (
        <div className="App">
            <header className="App-header">
                Appoint-o-matic 9000 Prototypes
            </header>
            <main className="App-content">
                <div className="scenario-selector">
                    <h3>Select a scenario</h3>
                    <div className="scenario-buttons">
                        <button>Scenario 1</button>
                        <button>Scenario 2</button>
                        <button>Scenario 3</button>
                        <button>Scenario 4</button>
                    </div>
                    <div className="scenario-display">

                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
