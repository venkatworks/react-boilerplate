import { useState } from 'react'

const EditableTask = ({ task, saveTask, editTask }) => {
  const [value, setValue] = useState(task.value)
  const [edit, setEdit] = useState(false)
  return (
    <div className="editable-task">
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
            saveTask(task.id, value)
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
  onCheckboxChange,
  saveTask,
  removeTask,
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
            <EditableTask saveTask={saveTask} task={task} />
            <div className="button" onClick={() => removeTask(task.id)}>
              Delete
            </div>
          </div>
        ))}
    </div>
  )
}

const state = () => {
  const [tasks, setTasks] = useState([
    { value: 'shopping', id: 0, completed: false },
    { value: 'assignment 1', id: 1, completed: true }
  ])
  const [newTask, setNewTask] = useState('')
  const [id, setId] = useState(1)

  const incrementId = () => {
    setId(id + 1)
    return id + 1
  }
  const addTask = value => {
    const id = incrementId()
    setTasks([...tasks, { value, id, completed: false }])
    setNewTask('')
  }
  const updateTask = updateFunction => id => {
    setTasks([
      ...tasks.filter(task => task.id !== id),
      ...tasks.filter(task => task.id === id).map(updateFunction)
    ])
  }
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const completedTask = updateTask(task => ({ ...task, completed: true }))
  const moveToTodoList = updateTask(task => ({ ...task, completed: false }))
  const saveTask = (id, text) =>
    updateTask(task => ({ ...task, value: text }))(id)

  return {
    tasks,
    newTask,
    setNewTask,
    addTask,
    completedTask,
    moveToTodoList,
    saveTask,
    removeTask
  }
}

const TodoApp = () => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    completedTask,
    moveToTodoList,
    ...otherTasksMethods
  } = state()
  return (
    <div className="todo-app">
      <div className="header">Add Item</div>
      <div className="head">
        <input
          type="text"
          className="edit-text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <div className="button" onClick={() => addTask(newTask)}>
          Add
        </div>
      </div>
      <div className="header">To Do</div>
      <Todo
        tasks={tasks}
        onCheckboxChange={completedTask}
        {...otherTasksMethods}
      />
      <div className="header">Completed</div>
      <Todo
        tasks={tasks}
        onCheckboxChange={moveToTodoList}
        completed={true}
        {...otherTasksMethods}
      />
    </div>
  )
}

export default TodoApp
