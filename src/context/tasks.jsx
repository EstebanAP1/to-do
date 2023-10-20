import { createContext, useReducer } from 'react'
import { tasksInitialState, tasksReducer } from '../reducers/tasks'

export const TasksContext = createContext()

function useTasksReducer () {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState)

  const addTask = task =>
    dispatch({
      type: 'ADD_TASK',
      payload: task
    })

  const updateStatus = task =>
    dispatch({
      type: 'UPDATE_STATUS',
      payload: task
    })

  const deleteTasks = () =>
    dispatch({
      type: 'DELETE_TASKS'
    })

  return { state, addTask, updateStatus, deleteTasks }
}

export function TaskProvider ({ children }) {
  const { state, addTask, updateStatus, deleteTasks } = useTasksReducer()

  return (
    <TasksContext.Provider
      value={{
        tasks: state,
        addTask,
        updateStatus,
        deleteTasks
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
