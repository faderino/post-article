import { Link, useLocation } from "react-router-dom";

const TabNavigation = ({ published, drafts, trashed }) => {
  const { pathname } = useLocation();
  return (
    <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-500">
      <ul className="-mb-px flex flex-wrap">
        <li className="mr-2">
          <Link
            to="/published"
            className={`inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
              pathname === "/published" || pathname === "/"
                ? "border-blue-600 text-blue-600"
                : "hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            Published <span>({published.length})</span>
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/drafts"
            className={`inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
              pathname === "/drafts"
                ? "border-blue-600 text-blue-600"
                : "hover:border-gray-300 hover:text-gray-600"
            }`}
            aria-current="page"
          >
            Drafts <span>({drafts.length})</span>
          </Link>
        </li>
        <li className="mr-2">
          <Link
            to="/trashed"
            className={`inline-block rounded-t-lg border-b-2 border-transparent p-4 ${
              pathname === "/trashed"
                ? "border-blue-600 text-blue-600"
                : "hover:border-gray-300 hover:text-gray-600"
            }`}
          >
            Trashed <span>({trashed.length})</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabNavigation;
