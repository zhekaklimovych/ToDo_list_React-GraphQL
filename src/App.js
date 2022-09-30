import {Routes, Route} from "react-router-dom";

import AllTasks from "./components/AllTasks/AllTasks";
import CreateTask from "./components/CreateTask/CreateTask";
import Home from "./components/Home/Home";
import EditTask from "./components/EditTask/EditTask";

import './App.css';

const App = () => {

    return(
        <div className="app-wrapper">
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<CreateTask />}></Route>
                <Route path='/all' element={<AllTasks />}></Route>
                <Route path='/edit/:id' element={<EditTask />}></Route>
            </Routes>
        </div>
    )
};

export default App;