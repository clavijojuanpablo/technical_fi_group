import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { FaUpload } from 'react-icons/fa';
import { BsPencilFill } from 'react-icons/bs';
import Form from './components/Form';
import Task from './components/Task';
import { IInputs, ITask } from './interfaces/app.interface';
import imago from './imago.svg'

const defaultValues: IInputs = { assignment: "", status: "", date: "" }
const auxItem: ITask = { id: 0, assignment: "", status: "", date: "" }

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskTable, setTaskTable] = useState<ITask[]>([]);
  const [taskAuxiliar, setTaskAuxiliar] = useState<ITask>(auxItem);
  const [isCreating, setIsCreating] = useState(true)

  const { handleSubmit, register, reset } = useForm<IInputs>()

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = (): void => {
    axios.get("https://localhost:7158/api/ToDoListTables")
      .then(res => {
        setTaskList(res?.data)
        setTaskTable(res?.data)
      })
      .catch(err => console.log(err))
  }

  const createTask = (newTask: ITask) => {
    axios.post("https://localhost:7158/api/ToDoListTables", newTask)
      .then(res => console.log(res?.data))
      .catch(err => console.log(err))
      .finally(() => getTasks())
  }

  const updateTaskId = (id: number, taskList: ITask) => {
    axios.put(`https://localhost:7158/api/ToDoListTables/${id}`, taskList)
      .then(res => {
        console.log(res?.data)
        getTasks()
        setTaskAuxiliar(auxItem)
      })
      .catch(err => console.log(err))
  }

  const cancelButton = () => {
    setIsCreating(false)
  }

  const normalButton = () => {
    setIsCreating(true)
    reset(defaultValues)
    setTaskAuxiliar(auxItem)
  }

  //Filter search task
  const [filterSearch, setFilterSearch] = useState("")

  const handleChangeSearch = (e: any) => {
    setFilterSearch(e.target.value)
    searchTask(e.target.value)
  }

  const searchTask = (letterSearch: string) => {
    let searchResult = taskTable.filter((e) => {
      if ((e.assignment.toLowerCase().includes(letterSearch.toLocaleLowerCase()))
        || (e.status.toLowerCase().includes(letterSearch.toLocaleLowerCase()))) {
        return e
      }
    })
    setTaskList(searchResult)
  }

  const [visibilityTask, setVisibilityTask] = useState(true)
  const handleChangeVisibility = (e: { target: { checked: any; }; }) => {
    setVisibilityTask(current => !current)
  }


  return (
    <div className="App">

      <div className="colForm">

        {
          isCreating ?
            <h1>Create Task <span><FaUpload /></span></h1>
            :
            <h1>Update Task <span><BsPencilFill /></span></h1>
        }

        <Form
          handleSubmit={handleSubmit}
          register={register}
          reset={reset}
          createTask={createTask}
          defaultValues={defaultValues}
          taskAuxiliar={taskAuxiliar}
          updateTaskId={updateTaskId}
          isCreating={isCreating}
          normalButton={normalButton}
        />

        <div className="imago">
          <img src={imago} alt="Logotipo Prueba Tecnica" />
          <p>Technical test performed by Juan Pablo Clavijo</p>
        </div>

      </div>

      <div className="colList">

        <div className='Searcher'>
          <input id='filterName' value={filterSearch} placeholder="Filter By Task Or Category" onChange={handleChangeSearch} />

          <div className='Hider'>
            <input type="checkbox" name='checkbox' onChange={handleChangeVisibility} />
            <p>Hide Task Completed</p>
          </div>
        </div>

        <div className="Tasks">
          {
            taskList.map(task => (
              <Task key={task.id}
                getTasks={getTasks}
                taskList={task}
                reset={reset}
                setTaskAuxiliar={setTaskAuxiliar}
                cancelButton={cancelButton}
                visibilityTask={visibilityTask}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
} export default App;