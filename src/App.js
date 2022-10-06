import { Routes, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AllTasks from "./containers/AllTasks/AllTasks";
import CreateTask from "./components/CreateTask/CreateTask";
import Home from "./components/Home/Home";
import EditTask from "./components/EditTask/EditTask";
import Modal from "./components/Modal/Modal";

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
                <Route path="/tasks/:id" element={<Modal />}></Route>
            </Routes>
        </div>
    );
};

export default withAuthenticator(App);
