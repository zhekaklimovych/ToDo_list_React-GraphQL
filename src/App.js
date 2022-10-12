import { Routes, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AllTasks from "./containers/AllTasks/AllTasks";
import CreateTask from "./containers/CreateTask/CreateTask";
import Home from "./containers/Home/Home";
import EditTask from "./containers/EditTask/EditTask";
import ShowTask from "./containers/ShowTask/ShowTask";

import About from "./containers/PublicPages/About";
import Opportunities from "./containers/PublicPages/Opportunities";

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

                <Route path="/about" element={<About />}></Route>
                <Route path="/opportunities" element={<Opportunities />}></Route>
            </Routes>
        </div>
    );
};

export default withAuthenticator(App);
