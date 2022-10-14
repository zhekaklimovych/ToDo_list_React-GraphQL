import { useMutation } from "@apollo/client";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import { useFormik } from "formik";

import { CREATE_TASK } from "../../api/graphQL/mutations";
import Preloader from "../../shared/Preloader";
import { validateCreateTask } from "../../utils/Validation";
import CheckAuth from "../../service/auth/CheckAuth";

import "./../../styles/common.css";
import "./../../styles/shine-button.css";

const CreateTask = () => {
    const navigate = useNavigate();

    const [createTask, { loading, error }] = useMutation(CREATE_TASK);
    const formik = useFormik({
        initialValues: { title: "", description: "", owner: "", taskStatus: "" },
        validate: validateCreateTask,
        onSubmit: ({ description, owner, taskStatus, title }) => {
            createTask({
                variables: {
                    description,
                    owner,
                    taskStatus,
                    title
                }
            }).then(() => navigate("/"));
        }
    });
    if(!CheckAuth()) return <Navigate to="/login" />;
    if (loading) return <Preloader />;
    if (error) return `Submission error! ${error.message}`;

    return (
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <NavLink to={"/"} className="shine-button back-btn">
                Back
            </NavLink>

            <h1>Create Task</h1>

            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="title"
                id="title"
                placeholder="Todo title..."
                value={formik.values.title}
                autoComplete="off"
            />
            {formik.errors.title ? <span style={{ color: "red" }}>{formik.errors.title}</span> : null}

            <textarea
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="description"
                id="description"
                placeholder="Todo description..."
                value={formik.values.description}
                autoComplete="off"
            />
            {formik.errors.description ? <span style={{ color: "red" }}>{formik.errors.description}</span> : null}

            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="owner"
                id="owner"
                placeholder="Owner..."
                value={formik.values.owner}
                autoComplete="off"
            />
            {formik.errors.owner ? <span style={{ color: "red" }}>{formik.errors.owner}</span> : null}

            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="taskStatus"
                id="taskStatus"
                placeholder="Enter status..."
                value={formik.values.taskStatus}
                autoComplete="off"
            />
            {formik.errors.taskStatus ? <span style={{ color: "red" }}>{formik.errors.taskStatus}</span> : null}

            <button type="submit" className="shine-button create-btn">
                <span>Create</span>
            </button>
        </form>
    );
};

export default CreateTask;
