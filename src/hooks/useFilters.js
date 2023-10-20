import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterTasks = tasks => {
    return tasks.filter(task => filters === 'all' || task.status === filters)
  }

  return { filters, filterTasks, setFilters }
}
