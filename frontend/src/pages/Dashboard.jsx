import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const { token, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks || []));
  }, [token]);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <h2>Dashboard</h2>
            <div className="mb-4">
              <TaskForm token={token} setTasks={setTasks} />
            </div>
            <TaskList tasks={tasks} token={token} setTasks={setTasks} />
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
