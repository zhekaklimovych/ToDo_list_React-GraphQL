import {useMutation, useQuery} from "@apollo/client";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {UPDATE_TASK_STATUS} from "../../graphQL/mutations/Task";
import {GET_TASK} from "../../graphQL/query/Task";
import Preloader from "../Preloader";
import "./EditTask.css"

const EditTask = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    let [updateTaskStatus, {data, loading, error}] = useMutation(UPDATE_TASK_STATUS);
    let {data:oneTask, loading:oneLoading, error:oneError} = useQuery(GET_TASK, {
        variables: {id}
    });

    let [taskStatus, setTaskStatus] = useState('');

    useEffect(()=> {
        if(oneTask) {
            setTaskStatus(oneTask?.getTask?.taskStatus)
        }
    }, [oneTask]);

    if (loading || oneLoading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    const handleSubmit = (e) => {
        e.preventDefault();

        updateTaskStatus({
            variables: {
                id, taskStatus
            }
        }).then(() => navigate('/'))
    }

    return(
        <div>
            <h1>Edit</h1>
            <form className="form-container">
                <input onChange={ e => setTaskStatus(e.target.value)} name="taskStatus" placeholder="Enter status..." value={taskStatus} autoComplete="off"/>
                <button onClick={handleSubmit} type="submit" className="shine-button save-btn">Save</button>
            </form>
            <div>
                <NavLink to={'/'}  className="shine-button">Back</NavLink>
            </div>
        </div>
    )
}

export default EditTask;