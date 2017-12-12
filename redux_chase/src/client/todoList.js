import expect from 'expect';
import deepFreeze from 'deep-freeze';
import React from 'react';
import ReactDom from 'react-dom';
import { deepEqual } from 'assert';
import { createStore, combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed});
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
  }
};

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action,
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action,
//         ),
//     }
// }

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
})

const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
        }
    }
  render() {
    return (
      <div>
        <input ref={node => {
            this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++,
          });
          this.input.value = '';
          this.setState({todo: store.getState()})
          console.log('a: ', this.state.todo)
        }}>
          Add Todo
        </button>
        <button onClick={() => {
            console.log(store.getState());
        }}>Show state</button>
        <ul>
          {this.props.todos.map(todo => 
            <li key={todo.id}>{todo.text}</li>
          )}
        </ul>
        {/* <h1>{this.state.todo}</h1> */}
      </div>
    )
  }
}

const render = () => {
  ReactDom.render(
    <TodoApp 
      todos={store.getState().todos} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();


// console.log('Initial state0:');
// console.log(store.getState());
// console.log('---------------------------');

// console.log('Dispatching ADD_TODO.');
// store.dispatch({
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Learn Redux',
// })
// console.log('Current state1:');
// console.log(store.getState());
// console.log('----------------------------');

// console.log('Dispatching ADD_TODO.');
// store.dispatch({
//     type: 'ADD_TODO',
//     id: 1,
//     text: 'Go shopping',
// });
// console.log('Current state2:');
// console.log(store.getState());
// console.log('----------------------------');

// console.log('Dispatching TOGGLE_TODO.');
// store.dispatch({
//     type: 'TOGGLE_TODO',
//     id: 0,
// })
// console.log('Current state3:');
// console.log(store.getState());
// console.log('----------------------------');


// console.log('Dispatching SET_VISIBILITY_FILTER.');
// store.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter: 'HIDDEN',
//     id: 0,
// });
// console.log('Current state4:');
// console.log(store.getState());
// console.log('----------------------------');

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false,
        },
    ];

    const action = {
        type: 'TOGGLE_TODO',
        id: 1,
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true,
        },
    ]

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}

// testAddTodo();
// testToggleTodo();
// console.log('All tests passed');