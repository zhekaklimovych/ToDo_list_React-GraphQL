import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import {GET_ALL_TASKS} from "../../graphQL/query/Task";
import Task from "../Task/Task";
import Preloader from "../Preloader";

import './AllTasks.css'

const AllTasks = () => {

    let {data, loading, error} = useQuery(GET_ALL_TASKS);

    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        if(data) {
            setTasks(data?.allTasks?.items);
        }
    }, [data]);


    if (loading) return <Preloader />;

    if(error) {
        return <p>Something wrong</p>;
    }
    if(!tasks.length) {
        return <p>No content</p>
    }

    return(
        <div className="tasks-container">
            <h1>Tasks</h1>
            {tasks.map(item => <Task key={item.id} data={item}/>)}

            <NavLink to={'/'} className="shine-button">Back</NavLink>

        </div>
    );

}

export default AllTasks;