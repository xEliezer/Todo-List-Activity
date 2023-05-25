import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useEffect, useState } from 'react';

function TodoList({ tasks, setTasks, addTask, deleteTask, setCurrentIndex}) {

    const todolist = tasks.map((info, index) => (
        <TodoItem
            setCurrentIndex={setCurrentIndex}
            tasks={tasks}
            setTasks={setTasks}
            tasknumber={index + 1}
            taskname={info.taskname}
            Status={info.Status}
        />
    ));

    useEffect(() =>{
        <TodoList />
    });


    return (
        <>
            <div id="tasklist" className="container mx-auto my-5 p-5 shadow">
                <div className="row mb-5">
                    <div className="col-md-9 my-auto">
                        <h1 className="text-white">
                            <span className="fw-bold display-4">Hello Boss!</span>
                            <br />
                            <small >Here are your tasks today</small>
                        </h1>
                    </div>
                    <div className="col-md-3">
                        <img className="img-fluid img-thumbnail rounded-circle shadow" src="/public/images/avatar.png" alt="Avatar" />
                    </div>
                </div>
                <div className="taskheader container rounded p-3 shadow">
                    <div className="row">
                        <div className="col-md-2 d-flex justify-content-start align-items-start">
                            <img className="img-fluid" src="/public/images/task.png" alt="task-icon" />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <h3 className="fw-semibold pt-2">Task</h3>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <h3 className="fw-semibold text-center pt-2">Status</h3>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center">
                            <h3 className="fw-semibold text-center pt-2">Remarks</h3>
                        </div>
                    </div>
                </div>
                {todolist}
            </div>
            <div className="container text-center">
                <TodoForm setTasks={setTasks} addTask={addTask} deleteTask={deleteTask}/>
            </div>
        </>
    )
}

export default TodoList;