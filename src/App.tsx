import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>View Appointments</h1>
            </header>
            <main className="App-content">
                <h2>April 2023</h2>
                <div className="calendar">
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

                    <ol className="day-grid">
                        <li className="month=prev">26</li>
                        <li className="month=prev">27</li>
                        <li className="month=prev">28</li>
                        <li className="month=prev">29</li>
                        <li className="month=prev">30</li>
                        <li className="month=prev">31</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li className="month=prev">1</li>
                        <li className="month=prev">2</li>
                        <li className="month=prev">3</li>
                        <li className="month=prev">4</li>
                        <li className="month=prev">5</li>
                        <li className="month=prev">6</li>
                    </ol>
                </div>
            </main>
        </div>
    );
}

export default App;
