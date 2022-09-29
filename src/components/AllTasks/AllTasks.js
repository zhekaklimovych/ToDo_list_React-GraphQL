import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import './AllTasks.css'
import {GET_ALL_TASKS} from "../../graphQL/query/Task";
import Task from "../Task/Task";

const AllTasks = () => {

    let {data, loading, error} = useQuery(GET_ALL_TASKS);

    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        if(!loading && data?.allTasks?.items) {
            setTasks(data.allTasks.items);
        }
        console.log(tasks)
    }, [tasks]);


    if(loading) {
       return <div>Loading</div>;
    }
    // if(error) {
    //     return <p>Something wrong</p>;
    // }
    // if(!data?.allTasks?.items?.length) {
    //     return <p>No content</p>
    // }

    return(
        <div className="tasks-container">
            {tasks.map(item => <Task key={item.id} data={item}/>)}
        </div>
    );

}

export default AllTasks;