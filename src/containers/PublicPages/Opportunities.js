import { NavLink } from "react-router-dom";
import "./Opportunities.css";

const Opportunities = () => {
    return (
        <div className="opportunities-container">
            <h1>Opportunities</h1>
            <p className="opportunities-text">
                After you register, you can create your own tasks, view and edit existing ones. Only public pages: About
                & Opportunities are available for unregistered users.
            </p>
            <NavLink to={"/"} className="shine-button back-btn">
                Back
            </NavLink>
        </div>
    );
};

export default Opportunities;
