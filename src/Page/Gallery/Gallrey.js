import {
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Gallrey = () => {
  const { content, setInputValue } = useContext(AuthContext);
  console.log(content);
  return (
    <section className="my-10 px-4 mx-auto lg:max-w-7xl md:px-8">
      <h1 className="text-gray-300 text-base font-medium pb-2">Sort by:</h1>
      <main className="flex w-full items-center mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-xl py-2">
          <div>
            <input
              type="radio"
              name="option"
              id="1"
              className="peer hidden"
              defaultChecked
              onClick={() => setInputValue("LATEST")}
            />
            <label
              htmlFor="1"
              className="block border-gray-400 border cursor-pointer select-none rounded-full p-1 text-center bg-gray-800 peer-checked:bg-gray-600 text-white"
            >
              Date Created <ChevronDownIcon className="inline-block h-5 w-5" />
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="option"
              id="2"
              className="peer hidden"
              onClick={() => setInputValue("TOP_COLLECTED")}
            />
            <label
              htmlFor="2"
              className="block border-gray-400 border cursor-pointer select-none rounded-full p-1 px-4 text-center bg-gray-800 peer-checked:bg-gray-600 text-white"
            >
              Most Collected
              <CircleStackIcon className="inline-block h-5 w-5 ml-1" />
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="option"
              id="3"
              className="peer hidden"
              onClick={() => setInputValue("TOP_MIRRORED")}
            />
            <label
              htmlFor="3"
              className="block border-gray-400 border cursor-pointer select-none rounded-full p-1 px-4 text-center bg-gray-800 peer-checked:bg-gray-600 text-white"
            >
              Most Mirrored
              <ArrowsRightLeftIcon className="inline-block h-5 w-5 ml-1" />
            </label>
          </div>
        </div>
      </main>
      {content.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg">
          {content.map((item, index) => (
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
                <div className="mt-32">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 space-y-3">
                    <p className="text-amber-300 font-semibold">
                      @ {item?.profile?.handle}
                    </p>
                    <p>Created at: {item.createdAt.slice(0, 10)}</p>
                    <p>
                      <CircleStackIcon className="inline-block h-5 w-5 mr-2" />
                      {item.stats.totalAmountOfCollects}
                    </p>
                    <p>
                      <ArrowsRightLeftIcon className="inline-block h-5 w-5 mr-2" />
                      {item.stats.totalAmountOfMirrors}
                    </p>
                    <p>
                      <ChatBubbleLeftRightIcon className="inline-block h-5 w-5 mr-2" />
                      {item.stats.totalAmountOfComments}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallrey;
