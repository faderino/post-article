import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { useLocation, useNavigate } from "react-router-dom";

const Table = ({ data, changeStatus }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="relative max-w-6xl overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((post) => (
            <tr key={post.id} className="border-b bg-white hover:bg-gray-50">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                {post.title}
              </th>
              <td className="px-6 py-4">{post.category}</td>
              <td className="flex items-center space-x-4 px-6 py-4 text-right">
                <PencilAltIcon
                  onClick={() => navigate(`/post/edit/${post.id}`)}
                  className="h-6 w-6 cursor-pointer hover:text-blue-500"
                />
                {pathname !== "/trashed" && (
                  <TrashIcon
                    onClick={() => changeStatus(post.id, "trash")}
                    className="h-6 w-6 cursor-pointer hover:text-red-500"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
