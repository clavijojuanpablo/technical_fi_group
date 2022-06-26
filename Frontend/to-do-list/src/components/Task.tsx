import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsPencilFill } from 'react-icons/bs';
import { FaTrashAlt, FaCalendarAlt } from 'react-icons/fa';
import { changeColorTask } from '../helpers/changeColorTask';
import { FuncPropsTask, ITask } from '../interfaces/app.interface';

const Task: React.FC<FuncPropsTask> = ({ getTasks, taskList, reset, setTaskAuxiliar, cancelButton, visibilityTask }) => {

  const deleteTask = (id: number) => {
    axios.delete(`https://localhost:7158/api/ToDoListTables/${id}`)
      .then(res => console.log(res?.data))
      .catch(err => console.log(err))
      .finally(() => {
        getTasks()
      })
  }

  const updateTask = () => {
    const obj = {
      assignment: taskList?.assignment.trim(),
      status: taskList?.status.trim(),
      date: taskList?.date.trim(),
      id: taskList?.id
    }
    reset(obj)
    setTaskAuxiliar(obj)
    cancelButton()
  }

  //STRIKE THE TASK COMPLETED
  const [isChecked, setIsChecked] = useState(true)

  const handleChange = (e: { target: { checked: any; }; }) => {
    setIsChecked(current => !current)
  }

  //CHANGE COLOR BY CATEGORY
  const [classTask, setClassTask] = useState<string>("")

  useEffect(() => {
    changeColorTask(visibilityTask, isChecked, taskList, setClassTask)
  }, [getTasks, isChecked])

  return (

    <div className={classTask}>


        <div className="TaskInfo">

          <span>{taskList?.status}</span>

          <div className='checkContainer'>
            <input type="checkbox" name='checkbox' onChange={handleChange} />
            {isChecked ? <h3>{taskList?.assignment}</h3> : <h3 className="taskChecked">{taskList?.assignment}</h3>}
          </div>

          <p><FaCalendarAlt /> {taskList?.date}</p>

        </div>

        <div className="TaskButtons">
          <button onClick={() => deleteTask(taskList.id)}><FaTrashAlt /></button>
          <button onClick={() => updateTask()}><BsPencilFill /></button>
        </div>

      </div>


  )
}

export default Task