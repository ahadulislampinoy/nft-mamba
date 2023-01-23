import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { getUserPosts } from "../lensQueries/getUserPosts";

const GetUserPosts = () => {
  const { setUserPosts, profileId } = useContext(AuthContext);

  const init = async () => {
    try {
      const response = await getUserPosts(profileId); // To get next result replace the cursor with the value of response.pageInfo.next
      setUserPosts(response.data.publications);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [profileId]);

  return <div></div>;
};

export default GetUserPosts;
