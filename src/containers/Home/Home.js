import { NavLink } from "react-router-dom";

import "./../../styles/closing-button.css";

const Home = () => {
    return (
        <div>
            <h1>To Do List</h1>
            <div>
                <NavLink to="/tasks/new" className="closing-button">
                    <span>Create Task</span>
                </NavLink>
                <NavLink to="/tasks" className="closing-button">
                    <span>Show All Tasks</span>
                </NavLink>
            </div>
            <div>
                <NavLink to="/about" className="closing-button">
                    <span>About</span>
                </NavLink>
                <NavLink to="/opportunities" className="closing-button">
                    <span>Opportunities</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
