import './App.css'

import { Tasks } from './components/tasks'
import { TaskForm } from './components/TaskForm'

import { useTasks } from './hooks/useTasks'

function App () {
  const { deleteTasks } = useTasks()

  return (
    <>
      <main>
        <h1>To-Do by Esteban</h1>
        <TaskForm />
        <Tasks />
        <footer>
          <button className='form-button' onClick={deleteTasks}>
            Clear
          </button>
        </footer>
      </main>
    </>
  )
}

export default App
