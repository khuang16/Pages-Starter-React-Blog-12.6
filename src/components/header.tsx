import * as React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 text-gray-50 z-10 mx-auto px-5 md:px-14 bg-gray-600 md:bg-white md:pl-a w-full md:w-1/2 md:right-0 md:text-gray-900">
      <nav className="py-10 flex items-center gap-8 text-4xl font-bold">
        <div>
          <a className="border-b-4">Home</a>
        </div>
        <div>
          <a className="hover:border-b-4">Blog</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
