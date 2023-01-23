import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { getUserPosts } from "../lensQueries/getUserPosts";

const GetUserPosts = () => {
  const { setUserPosts, profileId, cursor } = useContext(AuthContext);

  const init = async () => {
    try {
      const response = await getUserPosts(profileId, cursor); // To get next result replace the cursor with the value of response.pageInfo.next
      setUserPosts(response?.data?.publications);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [profileId, cursor]);

  return <div></div>;
};

export default GetUserPosts;
