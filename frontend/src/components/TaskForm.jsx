import { useState } from "react";

const TaskForm = ({ token, setTasks }) => {
  const [title, setTitle] = useState("");

  const createTask = async () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const res = await fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    console.log("CREATE TASK RESPONSE:", data);
    if (!data.task) {
      alert(data.message || "Failed to create task");
      return;
    }
    setTasks((prev) => [...prev, data.task]);
    setTitle("");
  };

  return (
    <>
      <input
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTask}>Add</button>
    </>
  );
};

export default TaskForm;
