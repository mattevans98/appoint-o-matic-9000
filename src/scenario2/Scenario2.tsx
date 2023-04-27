import React, { ReactElement } from 'react';
import './scenario2.scss';
import { Link } from "react-router-dom";

const Scenario2 = (): ReactElement => {
    return (
        <div className="Scenario">
            <header className="Scenario-header">
                <h1>Dr. Solus's Clinic</h1>
            </header>
            <main>
                <h2>April 2023</h2>
                <ul className="weekdays">
                    <li>
                        <abbr title="S">Sunday</abbr>
                    </li>
                    <li>
                        <abbr title="M">Monday</abbr>
                    </li>
                    <li>
                        <abbr title="T">Tuesday</abbr>
                    </li>
                    <li>
                        <abbr title="W">Wednesday</abbr>
                    </li>
                    <li>
                        <abbr title="R">Thursday</abbr>
                    </li>
                    <li>
                        <abbr title="F">Friday</abbr>
                    </li>
                    <li>
                        <abbr title="S">Saturday</abbr>
                    </li>
                </ul>
                <ol className="week-grid">
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                </ol>
                <h2>Select a time:</h2>
                <div className="hour-grid">
                    <div>
                        <p>9am - NP Maelon Helporn</p>
                    </div>
                    <div className="unavailable">
                        <p>10am</p>
                    </div>
                    <div className="unavailable">
                        <p>11am</p>
                    </div>
                    <Link to="/scenario3">
                        <div>
                            <p>12pm - Dr. Mordin Solus</p>
                        </div>
                    </Link>
                    <div>
                        <p>1pm - NP Maelon Helporn</p>
                    </div>
                    <div className="unavailable">
                        <p>2pm</p>
                    </div>
                    <div>
                        <p>3pm - NP Maelon Helporn</p>
                    </div>
                    <div className="unavailable">
                        <p>4pm</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Scenario2;
