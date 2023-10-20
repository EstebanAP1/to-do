import { useFilters } from '../hooks/useFilters'
import { useTasks } from '../hooks/useTasks'

export function Tasks () {
  const { tasks, updateStatus } = useTasks()
  const { filterTasks } = useFilters()

  return (
    <section className='task-section'>
      {filterTasks(tasks).map((task, index) => {
        const completeTask = {
          ...task,
          id: index
        }
        return (
          <div key={index} className='task-container'>
            <div
              className={`status-button ${task.status}`}
              value={task.status}
              onClick={() => updateStatus(completeTask)}
            ></div>
            <span className='task'>{task.desc}</span>
          </div>
        )
      })}
    </section>
  )
}
