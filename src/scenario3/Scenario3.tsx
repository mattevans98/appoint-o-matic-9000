import React, { ReactElement } from 'react';
import './scenario3.scss';
import { Link } from "react-router-dom";

const Scenario3 = (): ReactElement => {
    return (
        <div className="Scenario">
            <header className="Scenario-header">
                <h2>Dr. Solus's Clinic</h2>
            </header>
            <main className="main3">
                <div className="appt-detail-category">
                    <p>Time:</p>
                    <p>Date:</p>
                    <p>Provider:</p>
                    <p>Location:</p>
                </div>
                <div className="appt-detail-info">
                    <p>12:00 PM</p>
                    <p>4/5/23</p>
                    <p>Dr. Mordin Solus</p>
                    <p>1 Main St, Gozu District, OM</p>
                </div>
                <div className="schedule-buttons">
                    <Link to="/scenario4">
                        <button>Confirm</button>
                    </Link>
                    <Link to="/scenario2">
                        <button>Go back</button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Scenario3;
