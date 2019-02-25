import { useState } from 'react'
import { useReducer } from './use-reducer'
const EditableTask = ({ task, dispatch, completed }) => {
  const [value, setValue] = useState(task.value)
  const [edit, setEdit] = useState(false)
  return (
    <div className={`editable-task ${completed ? 'task-completed' : ''}`}>
      {edit ? (
        <input
          className="edit-text"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      ) : (
        <div className="task-name">{task.value}</div>
      )}
      {edit ? (
        <div
          className="button"
          onClick={() => {
            dispatch({ type: 'SAVE_TASK', id: task.id, text: value })
            setEdit(false)
          }}
        >
          Save
        </div>
      ) : (
        <div className="button" onClick={() => setEdit(true)}>
          Edit
        </div>
      )}
    </div>
  )
}

const Todo = ({
  tasks = [],
  dispatch,
  onCheckboxChange,
  completed = false
}) => {
  return (
    <div className="tasks">
      {tasks
        .filter(task => task.completed === completed)
        .map(task => (
          <div className="task" key={task.id}>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => onCheckboxChange(task.id)}
              checked={completed}
            />
            <EditableTask
              dispatch={dispatch}
              completed={completed}
              task={task}
            />
            <div
              className="button"
              onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}
            >
              Delete
            </div>
          </div>
        ))}
    </div>
  )
}

const useThrottle = (callback, interval) => {
  useEffect(() => {
    var handler = setInterval(() => {
      callback()
    }, interval)
    return () => {
      console.log('clearing interval')
      clearInterval(handler)
    }
  })
}

const state = () => {
  const initialState = {
    tasks: [],
    newTask: '',
    id: 1
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_NEW_TASK':
        return {
          ...state,
          newTask: action.newTask
        }

      case 'ADD_TASK':
        return {
          ...state,
          id: state.id + 1,
          newTask: '',
          tasks: [
            ...state.tasks,
            { value: action.value, id: state.id + 1, completed: false }
          ]
        }
      case 'COMPLETED_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks.filter(task => task.id !== action.id),
            ...state.tasks
              .filter(task => task.id === action.id)
              .map(task => ({ ...task, completed: true }))
          ]
        }
      case 'MOVE_TO_DO_LIST':
        return {
          ...state,
          tasks: [
            ...state.tasks.filter(task => task.id !== action.id),
            ...state.tasks
              .filter(task => task.id === action.id)
              .map(task => ({ ...task, completed: false }))
          ]
        }
      case 'SAVE_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks.filter(task => task.id !== action.id),
            ...state.tasks
              .filter(task => task.id === action.id)
              .map(task => ({ ...task, value: action.text }))
          ]
        }
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: [state.tasks.filter(task => task.id !== action.id)]
        }
      default:
        return { ...state }
    }
  }

  const completedTask = id => dispatch({ type: 'COMPLETED_TASK', id })
  const moveToTodoList = id => dispatch({ type: 'MOVE_TO_DO_LIST', id })
  const [state, dispatch] = useReducer(reducer, initialState)
  return {
    state,
    moveToTodoList,
    completedTask,
    dispatch
  }
}

const TodoApp = () => {
  const {
    moveToTodoList,
    completedTask,
    state: { tasks, newTask },
    dispatch
  } = state()
  return (
    <div className="todo-app">
      <div className="header">Add Item</div>
      <div className="head">
        <input
          type="text"
          className="edit-text"
          value={newTask}
          onChange={e =>
            dispatch({ type: 'SET_NEW_TASK', newTask: e.target.value })
          }
        />
        <div
          className="button"
          onClick={() => dispatch({ type: 'ADD_TASK', value: newTask })}
        >
          Add
        </div>
      </div>
      <div className="header">To Do</div>
      <Todo
        tasks={tasks}
        dispatch={dispatch}
        onCheckboxChange={completedTask}
      />
      <div className="header">Completed</div>
      <Todo
        tasks={tasks}
        dispatch={dispatch}
        completed={true}
        onCheckboxChange={moveToTodoList}
      />
    </div>
  )
}

export default TodoApp
