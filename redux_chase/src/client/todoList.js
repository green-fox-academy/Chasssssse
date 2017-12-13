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




const TodoItem = ({
  onClick,
  completed,
  text
 }) => (
  <li key={todo.id} id ={todo.id}
  onClick={onClick}
  style={{
    textDecoration:
      completed ?
        'line-through' :
        'none'
  }}>
  {text}
</li>
);

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)


const FilterLink = ({
  filter,
  children,
  currentFilter,
}) => {
  if (currentFilter === filter) {
    return (<span>{children}</span>);
  }
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        });
      }}
    >
      {children}
    </a>
  );
};

const getVisibleTodos = (
  todos,
  filter,
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      )
  }
}

let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    console.log('state: ', store.getState());
    const {
      todos,
      visibilityFilter,
    } = this.props;
    const visibleTodos = getVisibleTodos(
      this.props.todos,
      this.props.visibilityFilter,
    )
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
        }}>
          Add Todo
        </button>
        <TodoList
          todos={visibleTodos}
          onTodoClick={(id) => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }} 
        />

        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
          {' '}
          <FilterLink  
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}

const render = () => {
  ReactDom.render(
    <TodoApp 
      {...store.getState()} />,
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