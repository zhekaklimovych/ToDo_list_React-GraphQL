import {useMutation, useQuery} from "@apollo/client";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {UPDATE_TASK_BODY, UPDATE_TASK_STATUS} from "../../graphQL/mutations/Task";
import {GET_TASK} from "../../graphQL/query/Task";
import Preloader from "../Preloader";
import "./EditTask.css"

const EditTask = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    let [updateTaskStatus, {data: statusData, loading: statusLoading, error: statusError}] = useMutation(UPDATE_TASK_STATUS);
    let [updateTaskBody, {data: bodyData, loading: bodyLoading, error: bodyError}] = useMutation(UPDATE_TASK_BODY);
    let {data: oneTask, loading: oneLoading, error} = useQuery(GET_TASK, {
        variables: {id}
    });

    let [taskStatus, setTaskStatus] = useState('');
    let [description, setDescription] = useState('');
    let [title, setTitle] = useState('');

    useEffect(()=> {
        if(oneTask) {
            setTaskStatus(oneTask?.getTask?.taskStatus);
            setDescription(oneTask?.getTask?.description);
            setTitle(oneTask?.getTask?.title);
        }
    }, [oneTask]);

    if (statusLoading || oneLoading || bodyLoading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    const handleSubmitStatus = (e) => {
        e.preventDefault();

        updateTaskStatus({
            variables: {
                id, taskStatus
            }
        }).then(() => navigate('/'))
    }

    const handleSubmitBody = (e) => {
        e.preventDefault();

        updateTaskBody({
            variables: {
                description, id, title
            }
        }).then(() => navigate('/'))
    }
    return(
        <div>
            <h1>Edit</h1>
            <form className="form-container form-status" id="form-status" onSubmit={handleSubmitStatus}>
                <label>Change status</label>
                <input onChange={ e => setTaskStatus(e.target.value)} name="form-status" value={taskStatus} autoComplete="off"/>

                <button type="submit" className="shine-button save-btn">Save status</button>
            </form>

            <form className="form-container" id="form-body" onSubmit={handleSubmitBody}>
                <label>Title</label>
                <input onChange={ e => setTitle(e.target.value)} name="form-body" value={title} autoComplete="off"/>

                <label>Description</label>
                <textarea onChange={ e => setDescription(e.target.value)} name="form-body" value={description} autoComplete="off"/>

                <button type="submit" className="shine-button save-btn">Save Body</button>

                <div className="form-container-nav">
                    <NavLink to={`/all`}  className="shine-button">Back</NavLink>
                </div>
            </form>

        </div>
    )
}

export default EditTask;