import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
