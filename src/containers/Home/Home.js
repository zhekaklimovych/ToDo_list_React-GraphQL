import {NavLink} from "react-router-dom";

const Home = ()=> {

    return(
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
        </div>
    );
};

export default Home;