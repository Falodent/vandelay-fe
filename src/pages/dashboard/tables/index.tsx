import Entrance from "@/animated/entrance";
import Authors from "./components/authors";
import Projects from "./components/projects";

const Tables = () => {
  return (
    <Entrance className="space-y-6">
      <Authors />
      <Projects />
    </Entrance>
  );
};

export default Tables;
