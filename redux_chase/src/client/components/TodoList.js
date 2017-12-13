import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.todos);
    let todos = this.props.todos.map((todo) => 
      <li key={todo.id} 
        onClick={() => {this.props.toggleTodo(todo.id)}}
        style={{
          textDecoration:
            todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </li>
    );
    return (
      <ul>
        {todos}
      </ul>
    )  
  }
}

export default TodoList;