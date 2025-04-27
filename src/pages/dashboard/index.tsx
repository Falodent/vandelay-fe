import Purity from "./components/purity";
import Rockets from "./components/rockets";
import Statistics from "./components/statistics";
import OrdersOverview from "./components/orders";
import ProjectsTable from "./components/projects";
import Sales from "./components/sales";
import Overview from "./components/overview";
import Entrance from "@/animated/entrance";

const Dashboard = () => {
  return (
    <Entrance className="space-y-6">
      <Statistics />

      <section className="w-full grid grid-cols-1 xl:grid-cols-[57.6%_1fr] gap-6">
        <Purity />
        <Rockets />
      </section>

      <section className="w-full grid grid-cols-1 xl:grid-cols-[1fr_57.6%] gap-6">
        <Overview />
        <Sales />
      </section>

      <section className="w-full grid grid-cols-1 xl:grid-cols-[66%_1fr] gap-6">
        <ProjectsTable />
        <OrdersOverview />
      </section>
    </Entrance>
  );
};

export default Dashboard;
