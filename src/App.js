import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import ExplorePublications from "./components/ExplorePublications";
import GetPostComments from "./components/GetPostComments";
import GetPosts from "./components/GetPosts";
import GetUserPosts from "./components/GetUserPosts";
import GetUserProfile from "./components/GetUserProfile";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ExplorePublications />
      <GetPosts />
      <GetPostComments />
      <GetUserPosts />
      <GetUserProfile />
      <Toaster />
    </div>
  );
}

export default App;
