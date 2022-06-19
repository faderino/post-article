import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { NewspaperIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropDown] = useState(false);

  return (
    <aside className="w-64 min-w-[256px]" aria-label="Sidebar">
      <div className="h-full min-h-screen overflow-y-auto rounded bg-gray-100 py-4 px-3">
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            type="button"
            className="p-2 text-3xl font-semibold"
          >
            Post Article
          </button>
        </div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setShowDropDown(!showDropdown)}
              type="button"
              className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <NewspaperIcon className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span
                className="ml-3 flex-1 whitespace-nowrap text-left"
                sidebar-toggle-item=""
              >
                Posts
              </span>
              <ChevronDownIcon className="h-6 w-6" />
            </button>
            {showDropdown && (
              <ul className="space-y-2 py-2">
                <li>
                  <Link
                    to="/"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    All Posts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add-new"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Add New
                  </Link>
                </li>
                <li>
                  <Link
                    to="/preview"
                    className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100"
                  >
                    Preview
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
