export const tasksInitialState =
  JSON.parse(window.localStorage.getItem('tasks')) || []

const updateLocalStorage = tasks => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
}

const STATUS_TYPES = {
  completed: 'completed',
  pending: 'pending'
}

const TASKS_ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  UPDATE_STATUS: 'UPDATE_STATUS',
  DELETE_TASKS: 'DELETE_TASKS'
}

const UPDATE_STATE_BY_ACTION = {
  [TASKS_ACTION_TYPES.ADD_TASK]: (state, action) => {
    const task = action.payload
    const newTask = {
      desc: task,
      status: STATUS_TYPES.pending
    }

    const newState = state.map(task => task)
    newState.push(newTask)

    updateLocalStorage(newState)
    return newState
  },
  [TASKS_ACTION_TYPES.UPDATE_STATUS]: (state, action) => {
    const { id } = action.payload

    const newState = state.map((task, index) => {
      if (index === id) {
        if (task.status === STATUS_TYPES.pending) {
          return {
            desc: task.desc,
            status: STATUS_TYPES.completed
          }
        }
        if (task.status === STATUS_TYPES.completed) {
          return {
            desc: task.desc,
            status: STATUS_TYPES.pending
          }
        }
      }

      return task
    })

    updateLocalStorage(newState)
    return newState
  },
  [TASKS_ACTION_TYPES.DELETE_TASKS]: () => {
    updateLocalStorage([])

    return []
  }
}

export const tasksReducer = (state, action) => {
  const { type: actionType } = action

  const updateTasks = UPDATE_STATE_BY_ACTION[actionType]

  return updateTasks ? updateTasks(state, action) : state
}
