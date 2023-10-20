import { useFilters } from '../hooks/useFilters'
import { useTasks } from '../hooks/useTasks'

export function Footer () {
  const { deleteTasks } = useTasks()
  const { filters, setFilters } = useFilters()

  const handleChange = event => {
    setFilters(event.target.value)
  }

  return (
    <footer>
      <small>by Estebandido</small>
      <section>
        <select className='form-select' onChange={handleChange} value={filters}>
          <option value='all'>All</option>
          <option value='pending'>Pending</option>
          <option value='completed'>Completed</option>
        </select>
        <button
          className='form-button'
          onClick={() => {
            deleteTasks()
            setFilters('all')
          }}
        >
          Clear
        </button>
      </section>
    </footer>
  )
}
