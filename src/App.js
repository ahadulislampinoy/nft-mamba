import { RouterProvider } from "react-router-dom";
import ExplorePublications from "./components/ExplorePublications";
import GetPostComments from "./components/GetPostComments";
import GetPosts from "./components/GetPosts";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ExplorePublications />
      <GetPosts />
      <GetPostComments />
    </div>
  );
}

export default App;
