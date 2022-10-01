import {NavLink} from "react-router-dom";
import './Task.css';

const Task = (props) => {

    return(
        <div className="task-container-wrapper">
            <div className="task-container">
                <div className="task-item">
                    <span className="task-item-title">Title:</span>
                    <span className="task-item-content">{props.data.title}</span>
                </div>
                <div className="task-item">
                    <span className="task-item-title">Status:</span>
                    <span>{props.data.taskStatus}</span>
                </div>
            </div>
            <div className="manage-container">
                <NavLink to={`/tasks/${props?.data?.id}`} className="shine-button edit-btn">Show</NavLink>
                <NavLink to={`/tasks/${props?.data?.id}/edit`} className="shine-button edit-btn">Edit</NavLink>
            </div>
        </div>
    )
}

export default Task;