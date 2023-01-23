import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { getPost } from "../lensQueries/getPost";

const GetPosts = () => {
  const { setPost, id } = useContext(AuthContext);

  const init = async () => {
    try {
      const response = await getPost(id); // To get next result replace the cursor with the value of response.pageInfo.next
      setPost(response.data.publication);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [id]);

  return <div></div>;
};

export default GetPosts;
