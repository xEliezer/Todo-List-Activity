import { useEffect, useState } from "react"

function TodoForm({ setTasks, addTask }) {

    const [newTask, setNewTask] = useState({
        taskname: '',
        Status: 'in progress'
    })

    const handleTaskChange = (text) => {
        setNewTask((prevTask) => ({
            ...prevTask,
            taskname: text.target.value,
            
        }))
    }

    const newAddTask = () => {
       addTask(newTask)
    }

    return (
        <>
            <button type="button" className="btn addTaskBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Task:</label>
                                    <input onChange={handleTaskChange} type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button onClick={newAddTask} type="button" className="btn btn-primary" data-bs-dismiss="modal">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoForm