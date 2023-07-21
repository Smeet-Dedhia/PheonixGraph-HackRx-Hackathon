import Main from "../components/dashboard/Main";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
