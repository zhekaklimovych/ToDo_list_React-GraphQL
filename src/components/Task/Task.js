import './Task.css'
import {NavLink} from "react-router-dom";

const Task = (props) => {

    const handleOnChange = ()=> {

    }
    return(
        <div className="task-container-wrapper">
            <div className="task-container">
                <div className="task-item">
                    <span className="task-item-title">Title:</span>
                    <span className="task-item-content">{props.data.title}</span>
                </div>
                <div className="task-item">
                    <span className="task-item-title">Status:</span>
                    <span className="manage-item-content">{props.data.taskStatus}</span>
                </div>
            </div>

            <div className="manage-container">
                <NavLink onChange={handleOnChange} to={`/edit/${props?.data?.id}`} className="shine-button edit-btn">Edit</NavLink>
            </div>
        </div>

    )
}

export default Task;