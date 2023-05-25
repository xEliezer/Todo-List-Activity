import { useState } from "react"


function TodoItem({ tasknumber, taskname, Status }) {

    const [complete, setComplete] = useState(false)

    const handleChange = () => {
        setComplete(!complete)
    }


    return (
        <>
            <div className={`container rounded p-3 my-2 shadow ${complete ? 'bg-success text-white line-through' : 'bg-white'} `}>
                <div className="row">
                    <div className="col-md-2">
                        <h5>{tasknumber}</h5>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <h5>{taskname}</h5>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <h5>{complete ? "Complete" : "In Progress"}</h5>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <div className="form-check form-check-reverse">
                            <input className="form-check-input p-2" type="checkbox" checked={complete} onChange={handleChange} />
                            <label className="form-check-label" for="reverseCheck1">
                                finished?
                            </label>
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger ms-4" >Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TodoItem