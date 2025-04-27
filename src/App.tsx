import { BrowserRouter } from "react-router-dom";

// helpers
import ScrollToTop from "./helpers/scrollToTop";

// routes
import PageRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageRoutes />
    </BrowserRouter>
  );
};

export default App;
