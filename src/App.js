import {useState, useEffect} from "react";
import { useMutation, useQuery} from "@apollo/client";
import {GET_TASK, GET_ALL_TASKS} from "./graphQL/query/Task";
import {CREATE_TASK, UPDATE_TASK_BODY, UPDATE_TASK_STATUS} from "./graphQL/mutations/Task";
import AllTasks from "./components/AllTasks";
import './App.css';

const App = () => {

    // get task
    let {data: getTaskData, loading: getTaskLoading, error: getTaskError} = useQuery(GET_TASK, {
        variables: {
            id: "b9d87dbb-0e02-455c-aebf-2c1a56d96506"
        }
    });

    // get all tasks
    let {data: allTasksData, loading: allTasksLoading, error: allTasksError} = useQuery(GET_ALL_TASKS)


    // const [newTask] = useMutation(CREATE_TASK);

    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [owner, setOwner] = useState('');
    // const [status, setStatus] = useState('');

    // console.log(getTaskData)
    // console.log(allTasksData)

    // useEffect(()=> {
        // if(!loading) {
            // setDescription(data);
            // setStatus(data);
            // setTitle(data);
            // setOwner(data);
        // }
    // }, [data]);

    // const addTask = (e)=> {
    //     e.preventDefault();
    //     newTask({
    //         variables: {
    //             description, owner, taskStatus, title
    //         }
    //     }).then(({data})=> {
    //         console.log(data);
    //         setDescription('');
    //         setStatus('');
    //         setTitle('');
    //         setOwner('');
    //     })
    // }
    const getAllTasks = (e)=> {
        e.preventDefault();

    }
    return(
        <div className="app-wrapper">
            <h1>To Do List</h1>
            <div>
                <a href="" className="closing-button"><span>Create Task</span></a>
                <a href="" className="closing-button"><span>Show All Tasks</span></a>
            </div>


            {/*<AllTasks />*/}

            {/*<form>*/}
            {/*    <input placeholder='title' type='text' value={title} onChange={e => setTitle(e.target.value)}/>*/}
            {/*    <input placeholder='description' type='text' value={description} onChange={e => setDescription(e.target.value)}/>*/}
            {/*    <input placeholder='owner' type='text' value={owner} onChange={e => setOwner(e.target.value)}/>*/}
            {/*    <input placeholder='status' type='text' value={status} onChange={e => setStatus(e.target.value)}/>*/}

            {/*    <div>*/}
            {/*        <button onClick={(e)=>addTask(e)}>Create Task</button>*/}
            {/*    </div>*/}

                {/*<div>*/}
                {/*    <button onClick={(e) => getAllTasks(e)}>Get All Tasks</button>*/}
                {/*</div>*/}
            {/*</form>*/}

            {/*<div>*/}
            {/*    <p>{title}</p>*/}
            {/*    <p>{description}</p>*/}
            {/*    <p>{owner}</p>*/}
            {/*    <p>{status}</p>*/}
            {/*</div>*/}


        </div>
    )
};

export default App;