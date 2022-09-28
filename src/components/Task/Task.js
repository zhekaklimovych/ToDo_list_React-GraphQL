import './Task.css'

const Task = (props) => {

    console.log(props);

    return(
        <div className="task-container" key={props.data.id}>
            {<h3>{props.data.title}</h3>}
            {<p>{props.data.taskStatus}</p>}
            {<p>{props.data.description}</p>}
            {<p>{props.data.owner}</p>}
        </div>
    )
}

export default Task;