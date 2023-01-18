import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 py-6 text-gray-50">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="font-bold">
            NFT MAMBA<span className="font-extrabold text-[#C17D34]">.</span>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link rel="noopener noreferrer" to="/">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" to="/">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link rel="noopener noreferrer" to="/">
              Instagram
            </Link>
          </li>
          <li>
            <Link rel="noopener noreferrer" to="/">
              Facebook
            </Link>
          </li>
          <li>
            <Link rel="noopener noreferrer" to="/">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
