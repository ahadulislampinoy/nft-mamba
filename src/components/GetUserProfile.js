import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { getUserProfile } from "../lensQueries/getUserProfile";

const GetUserProfile = () => {
  const { setUserProfile, userName } = useContext(AuthContext);

  const init = async () => {
    try {
      const response = await getUserProfile(userName); // To get next result replace the cursor with the value of response.pageInfo.next
      setUserProfile(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [userName]);

  return <div></div>;
};

export default GetUserProfile;
