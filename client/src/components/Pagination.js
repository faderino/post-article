import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Pagination = ({ limit, setOffset }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() =>
              setOffset((offset) => (offset - limit < 0 ? 0 : offset - limit))
            }
            className="ml-0 flex items-center rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span>Previous</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setOffset((offset) => offset + limit)}
            className="flex items-center rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span>Next</span>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
