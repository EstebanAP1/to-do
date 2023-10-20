import { useContext } from 'react'
import { TasksContext } from '../context/tasks'

export function useTasks () {
  const tasks = useContext(TasksContext)

  if (tasks === undefined) {
    throw new Error('useTasks must be used within a TasksProvider')
  }

  return tasks
}
