import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { explorePublications } from "../lensQueries/explorePublications";

const ExplorePublications = () => {
  const { inputValue, setContent } = useContext(AuthContext);

  const init = async () => {
    try {
      const request = {
        sortCriteria: `${inputValue}`, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
        noRandomize: true,
        sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
        publicationTypes: ["POST"],
        cursor: '{"timestamp":1,"offset":0}',
        limit: 24,
      };
      const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
      setContent(response?.data?.explorePublications?.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, [inputValue]);

  return <div></div>;
};

export default ExplorePublications;
