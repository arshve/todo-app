import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} description={todo.description}/>
        ))}
      </div>
    )
  }
}

export default TodoList