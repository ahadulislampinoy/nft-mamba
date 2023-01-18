import {
  ArrowsRightLeftIcon,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg">
        <Link to="#" className="group relative block bg-black rounded-lg">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
          />

          <div className="relative p-8">
            <div className="mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Gallrey;
