import {
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import postUserImg from "../../Assets/postUser.png";
import { AuthContext } from "../../context/AuthProvider";

const Post = () => {
  const { setId, post, postComments } = useContext(AuthContext);
  const location = useLocation();
  useEffect(() => {
    setId(location?.pathname.split("/")[2]);
  }, [location?.pathname, setId]);
  return (
    <>
      {!post || !postComments ? (
        <div className="h-screen flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
        </div>
      ) : (
        <section>
          <div className="py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
                <div>
                  <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={`https://lens.infura-ipfs.io/ipfs/${
                        post?.metadata?.media[0]?.original?.url?.split("//")[1]
                      }`}
                      loading="lazy"
                      alt="nft"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-gray-50 flex py-4 justify-center space-x-8">
                    <p>
                      <CircleStackIcon className="inline-block h-6 w-6 mr-2" />
                      {post?.stats?.totalAmountOfCollects}
                    </p>
                    <p>
                      <ArrowsRightLeftIcon className="inline-block h-6 w-6 mr-2" />
                      {post?.stats?.totalAmountOfMirrors}
                    </p>
                    <p>
                      <ChatBubbleLeftRightIcon className="inline-block h-6 w-6 mr-2" />
                      {post?.stats?.totalAmountOfComments}
                    </p>
                  </div>
                </div>

                <div className="px-8 py-4 rounded-lg bg-gray-800/95">
                  <p className="text-green-500 text-lg font-bold text-center md:text-left space-x-2 py-5">
                    <img
                      src={postUserImg}
                      alt=""
                      className="h-5 w-5 inline-block"
                    />
                    <Link>@{post?.profile?.handle}</Link>
                  </p>

                  {post?.metadata?.description.split("\n").map((desc) => (
                    <p className="text-gray-50 mb-4">{desc}</p>
                  ))}

                  <h2 className="text-gray-400 text-xl font-semibold text-center md:text-left mb-2 md:mb-4">
                    Comments
                  </h2>
                  {postComments?.items?.length === 0 ? (
                    <div className="flex justify-center items-center text-center  h-[70vh]">
                      <div>
                        <ServerStackIcon className="h-16 w-16 text-gray-200 inline-block" />{" "}
                        <p className="text-xl mt-2 text-gray-100">
                          No Comments Found
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-y-auto h-56">
                      {postComments?.items?.map((item) => (
                        <div className="flex gap-3 py-4 border-b border-gray-600">
                          <img
                            src={
                              item?.profile?.picture?.original?.url.includes(
                                "https://lens.infura-ipfs.io/ipfs/"
                              )
                                ? item?.profile?.picture?.original?.url
                                : `https://lens.infura-ipfs.io/ipfs/${
                                    item?.profile?.picture?.original?.url?.split(
                                      "//"
                                    )[1]
                                  }`
                            }
                            alt=""
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <Link className="text-green-500 font-bold">
                              @{item?.profile?.handle}
                            </Link>
                            <p className="text-gray-50">
                              {item?.metadata?.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Post;
