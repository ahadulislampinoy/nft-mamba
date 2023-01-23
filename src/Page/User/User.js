import {
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import unknowUserImg from "../../Assets/unknown.jpg";
import { AuthContext } from "../../context/AuthProvider";

const User = () => {
  const { setProfileId, userPosts, setUserName, userProfile } =
    useContext(AuthContext);
  const location = useLocation();
  useEffect(() => {
    setUserName(location?.pathname.split("/")[2]);
    setProfileId(userProfile?.id);
  }, [location?.pathname, setProfileId, setUserName, userProfile?.id]);

  return (
    <>
      {userPosts?.length === 0 || Object.keys(userProfile).length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
        </div>
      ) : (
        <div className="py-6 sm:py-8 lg:py-12 min-h-screen">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto sm:flex gap-4">
            <div className="flex flex-col justify-center sm:max-w-xs p-4 shadow-md rounded-xl bg-gray-800 text-gray-50 max-h-52 w-full mb-4 sm:mb-0">
              <img
                src={
                  userProfile?.picture?.original?.url.includes(
                    "https://lens.infura-ipfs.io/ipfs/"
                  )
                    ? userProfile?.picture?.original?.url
                    : userProfile?.picture?.original?.url
                    ? `https://lens.infura-ipfs.io/ipfs/${
                        userProfile?.picture?.original?.url?.split("//")[1]
                      }`
                    : unknowUserImg
                }
                alt=""
                className="w-16 h-16 mx-auto rounded-full bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center divide-y divide-gray-300">
                <div className="space-y-4 mt-4">
                  <h2 className="text-xl text-yellow-500">
                    @{userProfile?.handle}
                  </h2>
                  <div className="flex justify-center items-center">
                    <div className="px-5 text-xs sm:text-base text-gray-500">
                      <p className="text-gray-50">
                        {userProfile?.stats?.totalFollowing}
                      </p>
                      Following
                    </div>
                    <div className="px-5 text-xs sm:text-base text-gray-500">
                      <p className="text-gray-50">
                        {userProfile?.stats?.totalFollowers}
                      </p>
                      Followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {userPosts?.items?.length === 0 ? (
              <div className="flex justify-center items-center text-center h-[70vh] bg-gray-800 w-full rounded-xl">
                <div>
                  <ServerStackIcon className="h-16 w-16 text-gray-400 inline-block" />
                  <p className="text-xl mt-2 text-gray-100">No Posts Found</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg p-4 bg-gray-800 w-full">
                {userPosts?.items?.map((item, index) => (
                  <Link
                    key={index}
                    to={`/post/${item.id}`}
                    className="group relative block bg-black rounded-lg"
                  >
                    <img
                      alt="Developer"
                      src={`https://lens.infura-ipfs.io/ipfs/${
                        item.metadata.media[0].original.url.split("//")[1]
                      }`}
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
                    />

                    <div className="relative p-4 text-gray-50">
                      <div className="mt-64">
                        <div className="transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 space-x-4 flex justify-center items-center">
                          <div>
                            <CircleStackIcon className="inline-block h-5 w-5 mr-2" />
                            {item.stats.totalAmountOfCollects}
                          </div>
                          <div>
                            <ArrowsRightLeftIcon className="inline-block h-5 w-5 mr-2" />
                            {item.stats.totalAmountOfMirrors}
                          </div>
                          <div>
                            <ChatBubbleLeftRightIcon className="inline-block h-5 w-5 mr-2" />
                            {item.stats.totalAmountOfComments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default User;
