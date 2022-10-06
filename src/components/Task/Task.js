import { NavLink } from "react-router-dom";

import "./Task.css";
import "./../../styles/common.css";
import "./../../styles/shine-button.css";
const Task = props => {
    return (
        <div className="modal-container">
            <div className="title-close-btn">
                <NavLink to={"/tasks"} className="shine-button">
                    Back
                </NavLink>
            </div>
            <div className="modal-wrapper">
                <div className="modal-item">
                    <span className="modal-item-title">Title:</span>
                    <span className="modal-item-content">{props?.data?.getTask?.title}</span>
                </div>
                <div className="modal-item">
                    <span className="modal-item-title">Status:</span>
                    <span className="modal-item-content">{props?.data?.getTask?.taskStatus}</span>
                </div>
                <div className="modal-item modal-item-description">
                    <span className="modal-item-title">Description:</span>
                    <span className="modal-item-content">{props?.data?.getTask?.description}</span>
                </div>
                <div className="modal-item">
                    <span className="modal-item-title">Owner:</span>
                    <span className="modal-item-content">{props?.data?.getTask?.owner}</span>
                </div>
            </div>
        </div>
    );
};

export default Task;
