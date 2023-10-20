import { useId } from 'react'
import { useTasks } from '../hooks/useTasks'

export function TaskForm () {
  const taskId = useId()
  const { addTask } = useTasks()

  const handleSubmit = event => {
    event.preventDefault()
    const { task } = Object.fromEntries(new window.FormData(event.target))
    if (task === '') return

    addTask(task)

    event.target.reset()
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            id={taskId}
            name='task'
            className='form-input'
            placeholder=''
            autoComplete='off'
            maxLength={40}
          />
          <label htmlFor={taskId} className='form-label'>
            Write a new task
          </label>
        </div>
        <button className='form-button'>Add Task</button>
      </form>
    </header>
  )
}
