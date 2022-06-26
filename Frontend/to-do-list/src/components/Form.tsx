import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { BiTask, BiCategory } from 'react-icons/bi';
import { AiOutlineWarning } from 'react-icons/ai';
import { FuncPropsForm, IInputs } from '../interfaces/app.interface';

const Form: React.FC<FuncPropsForm> = ({ handleSubmit, register, reset, createTask, defaultValues, taskAuxiliar, updateTaskId, isCreating, normalButton }) => {

  const submit: SubmitHandler<IInputs> = data => {
    if (taskAuxiliar.id !== 0) {
      updateTaskId(taskAuxiliar.id, data)
      reset(defaultValues)
      normalButton()
    } else {
      createTask(data)
    }
    reset(defaultValues)
  }

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit(submit)}>

        <div className="InputGroup">
          <label htmlFor='assignment'><BiTask /> Task</label>
          <input id="task" required placeholder='Task' maxLength={50} {...register("assignment")} />
        </div>

        <div className="InputGroup">
          <label htmlFor='status'><BiCategory /> Category</label>
          <select id="status" required {...register("status")}>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="University">University</option>
          </select>
        </div>

        <div className="InputGroup">
          <label htmlFor='date'><AiOutlineWarning /> Deadline</label>
          <input id="date" required type="date" placeholder='Date' {...register("date")} />
        </div>

        <div className="containerButtons">
          {
            isCreating ?
              <button>Create</button>
              :
              <>
                <button>Update</button>
                <button id="cancelButton" onClick={normalButton}>Cancel</button>
              </>
          }
        </div>

      </form>
    </div>
  )
}

export default Form