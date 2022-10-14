import { useQuery } from "@apollo/client";
import {Navigate, useParams} from "react-router-dom";

import Preloader from "../../shared/Preloader";
import { GET_TASK } from "../../api/graphQL/query";
import Task from "../../components/Task/Task";
import CheckAuth from "../../service/auth/CheckAuth";

const ShowTask = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery(GET_TASK, {
        variables: { id }
    });

    if(!CheckAuth()) return <Navigate to="/login" />;
    if (loading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <Task data={data} />
        </div>
    );
};

export default ShowTask;
