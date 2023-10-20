import './App.css'

import { Tasks } from './components/tasks'
import { TaskForm } from './components/TaskForm'

import { useTasks } from './hooks/useTasks'

function App () {
  const { deleteTasks } = useTasks()

  return (
    <>
      <main>
        <h1>To-Do</h1>
        <TaskForm />
        <Tasks />
        <footer>
          <small>by Estebandido</small>
          <button className='form-button' onClick={deleteTasks}>
            Clear
          </button>
        </footer>
      </main>
    </>
  )
}

export default App
