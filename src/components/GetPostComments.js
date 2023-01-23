import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { getPostComments } from "../lensQueries/getPostComments";

const GetPostComments = () => {
  const { setPostComments, id } = useContext(AuthContext);

  const init = async () => {
    try {
      const response = await getPostComments(id); // To get next result replace the cursor with the value of response.pageInfo.next
      setPostComments(response.data.publications);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [id]);

  return <div></div>;
};

export default GetPostComments;
