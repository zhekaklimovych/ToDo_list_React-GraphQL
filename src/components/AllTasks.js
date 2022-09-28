import {useQuery} from "@apollo/client";
import {useState} from "react";


import {GET_ALL_TASKS} from "../graphQL/query/Task";
import Task from "./Task/Task";

const AllTasks = () => {

    let {data, loading, error} = useQuery(GET_ALL_TASKS);

    if(loading) {
       return <div>Loading</div>;
    }
    if(error) {
        return <p>Something wrong</p>;
    }
    if(!data?.allTasks?.items?.length) {
        return <p>No content</p>
    }

    return(
        <div>
            { data.allTasks.items.map(item => <Task data={item}/>)}
        </div>
    );

}

export default AllTasks;