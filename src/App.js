import { Routes, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AllTasks from "./containers/AllTasks/AllTasks";
import CreateTask from "./containers/CreateTask/CreateTask";
import Home from "./containers/Home/Home";
import EditTask from "./containers/EditTask/EditTask";
import ShowTask from "./containers/ShowTask/ShowTask";

import "./App.css";

const App = ({ signOut, user }) => {
    return (
        <div className="app-wrapper">
            <span className="user-name">{user.username}</span>

            <div className="user-info">
                <button onClick={signOut}>Sign out</button>
            </div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tasks/new" element={<CreateTask />}></Route>
                <Route path="/tasks" element={<AllTasks />}></Route>
                <Route path="/tasks/:id/edit" element={<EditTask />}></Route>
                <Route path="/tasks/:id" element={<ShowTask />}></Route>
            </Routes>
        </div>
    );
};

export default withAuthenticator(App);
