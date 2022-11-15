// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoList, todoDelete} = props
  const {title, id} = eachTodoList

  const deleteTodo = () => {
    todoDelete(id)
  }
  return (
    <li className="main1">
      <p>{title}</p>
      <button className="button" type="button" onClick={deleteTodo}>
        delete
      </button>
    </li>
  )
}

export default TodoItem
