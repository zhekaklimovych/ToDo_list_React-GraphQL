import {Routes, Route} from "react-router-dom";

import AllTasks from "./components/AllTasks/AllTasks";
import CreateTask from "./components/CreateTask/CreateTask";
import Home from "./components/Home/Home";
import EditTask from "./components/EditTask/EditTask";
import Modal from "./components/Modal/Modal";

import './App.css';

const App = () => {

    return(
        <div className="app-wrapper">
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/tasks/new' element={<CreateTask />}></Route>
                <Route path='/tasks' element={<AllTasks />}></Route>
                <Route path='/tasks/:id/edit' element={<EditTask />}></Route>
                <Route path='/tasks/:id' element={<Modal />}></Route>
            </Routes>
        </div>
    )
};

export default App;