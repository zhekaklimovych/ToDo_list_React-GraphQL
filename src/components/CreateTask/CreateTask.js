import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../../graphQL/mutations/Task";
import {useFormik} from "formik";
import './CreateTask.css'
import {useState} from "react";
import Preloader from "../Preloader";
import {NavLink, useNavigate} from "react-router-dom";

const CreateTask = () => {

    const validateCreateTask = empData => {
        const errors = {};

        if (!empData.text) {
            errors.text = 'Field can not be empty';
        } else if (empData.text.length > 40) {
            errors.text = 'Max characters 40 ';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues:{
            title:'',
            description:'',
            owner:'',
            taskStatus:'',
        },
        validate: validateCreateTask,
        onSubmit: (e)=>{
            handleSubmit(e);
        }
    });

    const navigate = useNavigate();

    let [createTask, {data, loading, error}] = useMutation(CREATE_TASK);

    let [description, setDescription] = useState('');
    let [owner, setOwner] = useState('');
    let [taskStatus, setTaskStatus] = useState('');
    let [title, setTitle] = useState('');

    if (loading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;


    const handleSubmit = (e) => {
        e.preventDefault();

        createTask({
            variables: {
                description, owner, taskStatus, title
            }
        }).then(() => navigate('/'))
    }

    return(
        <form className="form-container" onSubmit={formik.handleSubmit}>

            <NavLink to={'/'} className="shine-button back-btn">Back</NavLink>

            <h1>Create Task</h1>

            <input onChange={ e => setTitle(e.target.value)} name="title" placeholder="Todo title..." value={title} autoComplete="off"/>
            <textarea onChange={ e => setDescription(e.target.value)} name="description" placeholder="Todo description..." value={description} autoComplete="off"/>
            <input onChange={ e => setOwner(e.target.value)} name="owner" placeholder="Owner..." value={owner} autoComplete="off"/>
            <input onChange={ e => setTaskStatus(e.target.value)} name="taskStatus" placeholder="Enter status..." value={taskStatus} autoComplete="off"/>

            <button type="submit" className="shine-button create-btn">
                <span>Create</span>
            </button>
        </form>
    )
}

export default CreateTask;