import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_TASK } from "../../api/graphQL/query/Task";
import Preloader from "../../shared/Preloader";

import Task from "../../components/Task/Task";

const ShowTask = () => {
    const { id } = useParams();

    const { data, loading, error } = useQuery(GET_TASK, {
        variables: { id }
    });
    if (loading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <Task data={data} />
        </div>
    );
};

export default ShowTask;
