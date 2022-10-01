import '../EditTask/EditTask.css'
import {useQuery} from "@apollo/client";
import {NavLink, useParams} from "react-router-dom";

import {GET_TASK} from "../../graphQL/query/Task";
import Preloader from "../Preloader";

const Modal = ()=> {

    const {id} = useParams();

    let {data, loading, error} = useQuery(GET_TASK, {
        variables: {id}
    });
    if (loading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    return(
        <div className="modal-container">
            <div className="title-close-btn">
                <NavLink to={`/all`}  className="shine-button">Back</NavLink>
            </div>
            <div className="modal-wrapper">
                <div className="modal-item">
                    <span className="modal-item-title">Title:</span>
                    <span className="modal-item-content">{data?.getTask?.title}</span>
                </div>
                <div className="modal-item">
                    <span className="modal-item-title">Status:</span>
                    <span className="modal-item-content">{data?.getTask?.taskStatus}</span>
                </div>
                <div className="modal-item modal-item-description">
                    <span className="modal-item-title">Description:</span>
                    <span className="modal-item-content">{data?.getTask?.description}</span>
                </div>
                <div className="modal-item">
                    <span className="modal-item-title">Owner:</span>
                    <span className="modal-item-content">{data?.getTask?.owner}</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;