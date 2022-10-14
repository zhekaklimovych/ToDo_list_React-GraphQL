import { Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

import Layout from "./containers/Layout/Layout";
import AllTasks from "./containers/AllTasks/AllTasks";
import CreateTask from "./containers/CreateTask/CreateTask";
import EditTask from "./containers/EditTask/EditTask";
import ShowTask from "./containers/ShowTask/ShowTask";
import Login from "./containers/Login/Login";

import About from "./containers/About/About";
import Opportunities from "./containers/Opportunities/Opportunities";

import "./App.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <h1>To Do List</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/tasks/new" element={<CreateTask />}></Route>
                    <Route  path="/tasks" element={<AllTasks />}></Route>
                    <Route path="/tasks/:id/edit" element={<EditTask />}></Route>
                    <Route path="/tasks/:id" element={<ShowTask />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/opportunities" element={<Opportunities />}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
