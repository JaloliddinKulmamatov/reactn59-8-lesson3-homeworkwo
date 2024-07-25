import Panel from "../panel/Panel";
import Todo from "../todo/Todo";
import "./Today.scss";
import { IoMdAddCircleOutline } from "react-icons/io";


export default function Dashboard() {
  return (
    <>
      <h1>Today</h1>
      <div className="today">
        <Panel />
        <div className="todayDo">
          <h2>Today</h2>
          <form>
            <div>
              <IoMdAddCircleOutline />
              <input type="text" placeholder="Add new task" />
            </div>
            <div>
              <input type="checkbox" />
              <p>Database create for company</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Website templates</p>
            </div>{" "}
            <div>
              <input type="checkbox" />
              <p>Meet work team</p>
            </div>
          </form>
          <Todo />
        </div>
      </div>
    </>
  );
}
