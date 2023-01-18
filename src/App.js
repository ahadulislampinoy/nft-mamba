import { RouterProvider } from "react-router-dom";
import ExplorePublications from "./components/ExplorePublications";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ExplorePublications />
    </div>
  );
}

export default App;
