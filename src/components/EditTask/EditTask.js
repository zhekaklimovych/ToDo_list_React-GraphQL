import {useMutation, useQuery} from "@apollo/client";
import {NavLink, useParams} from "react-router-dom";
import {useFormik} from "formik";

import {UPDATE_TASK_BODY, UPDATE_TASK_STATUS} from "../../graphQL/mutations/Task";
import {GET_TASK} from "../../graphQL/query/Task";
import Preloader from "../Preloader";
import {validateEditTask, validateEditTaskBody} from "../../Validation";

import "./EditTask.css"

const EditTask = () => {

    const {id} = useParams();

    let [updateTaskStatus, {loading: statusLoading}] = useMutation(UPDATE_TASK_STATUS);
    let [updateTaskBody, {loading: bodyLoading}] = useMutation(UPDATE_TASK_BODY);
    let {data: oneTask, loading: oneLoading, error} = useQuery(GET_TASK, {
        variables: {id}
    });

    const formikStatus = useFormik({
        enableReinitialize: true,
        initialValues:{
            taskStatus: oneTask?.getTask?.taskStatus ?? '',
        },
        validate: validateEditTask,
        onSubmit: ({taskStatus})=> {
            updateTaskStatus({
                variables: {
                    id, taskStatus
                }
            })
        }
    });

    const formikBody = useFormik({
        enableReinitialize: true,
        initialValues:{
            title: oneTask?.getTask?.title ?? '',
            description: oneTask?.getTask?.description ?? ''
        },
        validate: validateEditTaskBody,
        onSubmit: ({description, title})=>{
            updateTaskBody({
                variables: {
                    description, id, title
                }
            })
        }
    });

    if (statusLoading || oneLoading || bodyLoading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    return(
        <div>
            <h1>Edit</h1>
            <form className="form-container form-status" onSubmit={formikStatus.handleSubmit}>
                <label>Change status</label>
                <input
                    type="text"
                    name="taskStatus"
                    id="taskStatus"
                    value={formikStatus.values.taskStatus}
                    autoComplete="off"
                    onChange={formikStatus.handleChange}
                    onBlur={formikStatus.handleBlur}
                />
                {formikStatus.errors.taskStatus ? <span style={{color:'red'}}>{formikStatus.errors.taskStatus}</span> : null}
                <button type="submit" className="shine-button save-btn">Save status</button>
            </form>

            <form className="form-container" onSubmit={formikBody.handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formikBody.values.title}
                    autoComplete="off"
                    onChange={formikBody.handleChange}
                    onBlur={formikBody.handleBlur}
                />
                {formikBody.errors.title ? <span style={{color:'red'}}>{formikBody.errors.title}</span> : null}

                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={formikBody.values.description}
                    autoComplete="off"
                    onChange={formikBody.handleChange}
                    onBlur={formikBody.handleBlur}
                />
                {formikBody.errors.description ? <span style={{color:'red'}}>{formikBody.errors.description}</span> : null}

                <button type="submit" className="shine-button save-btn">Save Body</button>

                <div className="form-container-nav">
                    <NavLink to={`/all`}  className="shine-button">Back</NavLink>
                </div>
            </form>

        </div>
    )
}

export const Modal = (props)=> {

    return(
        <div className="modal-container">
            <div className="title-close-btn">
                <button onClick={() => {props.setOpenModal(false)}}>X</button>
            </div>
            <div className="modal-wrapper">
                <div className="modal-item">
                    <span className="modal-item-title">Title:</span>
                    <span className="modal-item-content">{props.data.title}</span>
                </div>
                <div className="modal-item">
                    <span className="modal-item-title">Status:</span>
                    <span className="modal-item-content">{props.data.taskStatus}</span>
                </div>
                <div className="modal-item modal-item-description">
                    <span className="modal-item-title">Description:</span>
                    <span className="modal-item-content">{props.data.description}</span>
                </div>
                <div className="modal-item">
                    <span className="modal-item-title">Owner:</span>
                    <span className="modal-item-content">{props.data.owner}</span>
                </div>
            </div>
        </div>
    )
}


export default EditTask;