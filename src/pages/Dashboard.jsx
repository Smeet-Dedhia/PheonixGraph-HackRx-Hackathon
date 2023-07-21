import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
