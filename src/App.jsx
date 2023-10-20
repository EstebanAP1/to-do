import './App.css'

import { TaskProvider } from './context/tasks.jsx'
import { FiltersProvider } from './context/filters.jsx'

import { Tasks } from './components/tasks'
import { TaskForm } from './components/TaskForm'
import { Footer } from './components/Footer'

function App () {
  return (
    <>
      <FiltersProvider>
        <TaskProvider>
          <main>
            <h1>To-Do</h1>
            <TaskForm />
            <Tasks />
            <Footer />
          </main>
        </TaskProvider>
      </FiltersProvider>
    </>
  )
}

export default App
