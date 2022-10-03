import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import {GET_ALL_TASKS} from "../../graphQL/query/Task";
import Task from "../Task/Task";
import Preloader from "../Preloader";

import './AllTasks.css'

const AllTasks = () => {

    let {data, loading, error, refetch} = useQuery(GET_ALL_TASKS);

    const [tasks, setTasks] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const tasksNumber = 3;

    let skip = tasksNumber * pageNumber - tasksNumber;
    let maxElements = skip + tasksNumber;
    let paginetedTasks = tasks?.length == 0 ? [] : tasks?.slice(skip, maxElements);

    const handlePrev =()=> {
        if(pageNumber === 1) return;
        setPageNumber(pageNumber - 1);
    }

    const handleNext = () => {
        setPageNumber(prev=> prev + 1);
    }

    useEffect(()=> {
        if(data) {
            setTasks(data?.allTasks?.items);
            refetch();
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
            {paginetedTasks.map(item => <Task key={item.id} data={item}/>)}
            <div>Page {pageNumber} </div>
            <div>
                <button disabled={pageNumber === 1} className="shine-button" onClick={handlePrev} >prev</button>
                <button disabled={Math.ceil(tasks.length / tasksNumber) === pageNumber} className="shine-button" onClick={handleNext}>next</button>
            </div>
            <NavLink to={'/'} className="shine-button">Back</NavLink>

        </div>
    );

}

export default AllTasks;