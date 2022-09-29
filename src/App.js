import {Routes, Route} from "react-router-dom";
// import {CREATE_TASK, UPDATE_TASK_BODY, UPDATE_TASK_STATUS} from "./graphQL/mutations/Task";
import AllTasks from "./components/AllTasks/AllTasks";
import CreateTask from "./components/CreateTask/CreateTask";
import './App.css';
import Home from "./components/Home/Home";


const App = () => {

    // let {data: getTaskData, loading: getTaskLoading, error: getTaskError} = useQuery(GET_TASK, {
    //     variables: {
    //         id: "b9d87dbb-0e02-455c-aebf-2c1a56d96506"
    //     }
    // });

    return(
        <div className="app-wrapper">
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<CreateTask />}></Route>
                <Route path='/all' element={<AllTasks />}></Route>
            </Routes>
        </div>
    )
};

export default App;