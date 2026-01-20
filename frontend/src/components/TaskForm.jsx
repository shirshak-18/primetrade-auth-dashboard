import { useState } from "react";

const TaskForm = ({ token, setTasks }) => {
  const [title, setTitle] = useState("");

  const createTask = async () => {
    const res = await fetch("/api/tasks", {
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
