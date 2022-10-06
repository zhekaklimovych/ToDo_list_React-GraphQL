import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import client from "../../api/ApolloClient";
import { ALL_TASKS } from "../../api/graphQL/query/Task";
import TaskInfo from "../../components/TaskInfo/TaskInfo";
import Preloader from "../../shared/Preloader";

import "./AllTasks.css";

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);

    const [loading, setLoading] = useState(false);
    const [tokenList, setTokenList] = useState([]);
    const [disableNextButton, setDisableNextButton] = useState(false);

    const fetchTasks = (forward = true, limit = 3) => {
        setLoading(true);

        client
            .query({
                query: ALL_TASKS,
                variables: {
                    nextToken: (forward ? tokenList[tokenList.length - 1] : tokenList[tokenList.length - 3]) || null,
                    limit
                }
            })
            .then(({ data }) => {
                if (!data?.allTasks?.items?.length) {
                    throw new Error("data is missing");
                }
                setTasks(data.allTasks.items);
                setDisableNextButton(!data.allTasks.nextToken);

                if (forward) {
                    setTokenList([...tokenList, data.allTasks.nextToken]);
                } else {
                    setTokenList(tokenList.slice(0, tokenList.length - 1));
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handlePrev = () => {
        fetchTasks(false);
    };

    const handleNext = () => {
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
        //eslint-disable-next-line
    }, []);

    if (loading) return <Preloader />;

    if (!tasks.length) {
        return <p>No content</p>;
    }

    return (
        <div className="tasks-container">
            <h1>Tasks</h1>
            {tasks.map(item => (
                <TaskInfo key={item.id} data={item} />
            ))}

            <div>
                <button disabled={tokenList.length < 2} className="shine-button" onClick={handlePrev}>
                    prev
                </button>
                <button disabled={disableNextButton} className="shine-button" onClick={handleNext}>
                    next
                </button>
            </div>
            <NavLink to={"/"} className="shine-button">
                Back
            </NavLink>
        </div>
    );
};

export default AllTasks;
