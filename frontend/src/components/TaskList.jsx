const TaskList = ({ tasks, token, setTasks }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const toggleTask = async (id, completed) => {
    const res = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ completed: !completed }),
    });

    const data = await res.json();

    if (data.task) {
      setTasks((prev) => prev.map((t) => (t._id === id ? data.task : t)));
    }
  };

  const deleteTask = async (id) => {
    const res = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    if (res.ok) {
      setTasks((prev) => prev.filter((t) => t._id !== id));
    }
  };

  return (
    <ul>
      {tasks.filter(Boolean).map((task) => (
        <li
          className="d-flex justify-content-between align-items-center"
          key={task._id}
        >
          <span>
            {task.title} {task.completed && "✅"}
          </span>

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-success"
              onClick={() => toggleTask(task._id, task.completed)}
            >
              Toggle
            </button>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
