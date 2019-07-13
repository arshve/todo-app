import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Search from './Search'

class TodoApp extends React.Component {
  constructor() {
    super()
    const data_todos = [
      {id: 1, description: 'Todo 1'},
      {id: 2, description: 'Todo 2'},
      {id: 3, description: 'Todo 3'}
    ]
    this.state = {
      todos: data_todos,
      filter: ''
    }
    this.onAddTodo = this.onAddTodo.bind(this)
    this.onSearchTodo = this.onSearchTodo.bind(this)
  }

  onAddTodo(decription) {
    const todos = this.state.todos
    todos.push({
      id: todos.length + 1,
      description: decription
    })
    this.setState({todos: todos})
  }

  onSearchTodo(filterText) {
    this.setState({filter: filterText})
  }

  render() {
    const {todos, filter} = this.state
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.description.toLowerCase().includes(filter.toLowerCase())
    })
    return (
      <div>
        <h1>Todo App</h1>
        <h3>Sisa Todo : {filteredTodos.length}</h3>
        <Search onSearch={this.onSearchTodo}/>
        <TodoList todos={filteredTodos}/>
        <AddTodo onAdd={this.onAddTodo}/>
      </div>
    )
  }
}

export default TodoApp