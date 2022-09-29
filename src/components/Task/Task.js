import './Task.css'

const Task = (props) => {

    console.log(props);

    return(
        <div className="task-container">
            <div className="task-item">
                <span className="task-item-title">Title:</span>
                <span>{props.data.title}</span>
            </div>
            <div className="task-item">
                <span className="task-item-title">Description:</span>
                <span>{props.data.description}</span>
            </div>
            <div className="task-item">
                <span className="task-item-title">Status:</span>
                <span>{props.data.taskStatus}</span>
            </div>

            <div className="task-item">
                <span className="task-item-title">Owner:</span>
                <span>{props.data.owner}</span>
            </div>
            <div>
                <button>Edit</button>
                <button>Save</button>
            </div>
        </div>
    )
}

export default Task;