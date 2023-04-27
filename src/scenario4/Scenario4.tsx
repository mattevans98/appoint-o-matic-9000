import React, { ReactElement } from 'react';
import './scenario4.scss';
import { Link } from "react-router-dom";

const Scenario4 = (): ReactElement => {
    return (
        <div className="Scenario">
            <header className="Scenario-header">
                <h2>Dr. Solus's Clinic</h2>
            </header>
            <main className="main4">
                <h2>Future appointments:</h2>
                <div>
                    <p>Date: 4/5/23</p>
                    <p>Time: 12:00 PM</p>
                    <p>Provider: Dr. Mordin Solus</p>
                    <p>Location: 1 Main St, Gozu District, OM</p>
                    <Link to="/scenario5">
                        <button>Cancel</button>
                    </Link>
                </div>
                <h2>Past appointments:</h2>
                <div>
                    <p>Date: 2/18/23</p>
                    <p>Time: 3:00 PM</p>
                    <p>Provider: NP Maelon Helporn</p>
                    <p>Location: 1 Main St, Gozu District, OM</p>
                </div>
                <div>
                    <p>Date: 1/3/23</p>
                    <p>Time: 9:00 AM</p>
                    <p>Provider: Dr. Mordin Solus</p>
                    <p>Location: 1 Main St, Gozu District, OM</p>
                </div>
            </main>
        </div>
    )
};

export default Scenario4;
