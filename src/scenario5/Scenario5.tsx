import React, { ReactElement } from "react";
import "./scenario5.scss";
import { Link } from "react-router-dom";

const Scenario5 = (): ReactElement => {
    return (
        <div className="Scenario">
            <header className="Scenario-header">
                <h2>Cancel Appointment</h2>
            </header>
            <main className="main5">
                <div>
                    <h3>Are you sure you want to cancel your appointment with Dr. Doktor on 4/5/23 at 12:00 PM?</h3>
                    <div>
                        <Link to="/">
                            <button>Yes</button>
                        </Link>
                        <Link to="/scenario4">
                            <button>No</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Scenario5;
