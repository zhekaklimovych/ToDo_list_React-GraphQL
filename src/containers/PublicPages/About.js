import { NavLink } from "react-router-dom";
import "./Opportunities.css";

const About = () => {
    return (
        <div className="opportunities-container">
            <h1>About</h1>
            <p className="opportunities-text">This TodoList is designed to record tasks and monitor them.</p>
            <NavLink to={"/"} className="shine-button back-btn">
                Back
            </NavLink>
        </div>
    );
};

export default About;
