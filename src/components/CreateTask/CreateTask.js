import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../../graphQL/mutations/Task";

import './CreateTask.css'
import {useState} from "react";

const CreateTask = () => {

    let [createTask, {data, loading, error}] = useMutation(CREATE_TASK);

    let [description, setDescription] = useState('');
    let [owner, setOwner] = useState('');
    let [taskStatus, setTaskStatus] = useState('');
    let [title, setTitle] = useState('');

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            variables: {
                description: description,
                owner: owner,
                taskStatus: taskStatus,
                title: title
            }
        }).then(({data}) => {
            console.log(data);
            setTitle('');
            setTaskStatus('');
            setDescription('');
            setOwner('');
        })
    }

    return(

        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Create Task</h1>

            <input onChange={ e => setTitle(e.target.value)} name="title" placeholder="Todo title..."/>
            <textarea onChange={ e => setDescription(e.target.value)} name="description" placeholder="Todo description..."/>
            <input onChange={ e => setOwner(e.target.value)} name="owner" placeholder="Owner..."/>
            <input onChange={ e => setTaskStatus(e.target.value)} name="taskStatus" placeholder="Enter status..."/>

            <button type="submit" className="closing-button create-btn"><span>Create</span></button>
        </form>

    )
}

export default CreateTask;