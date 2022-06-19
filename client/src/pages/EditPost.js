import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../api/postArticle";
import { success, errorToast } from "../utils/toast";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    getPostById(id)
      .then((data) => {
        setPost(data);
        setEditData({
          title: data.title,
          content: data.content,
          category: data.category,
          status: data.status,
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (status) => {
    editPost(id, { ...editData, status })
      .then((data) => success(data.message))
      .then(() => navigate("/"))
      .catch((error) => {
        errorToast(`${error[0].path}: ${error[0].message}`);
        console.log(error);
      });
  };

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <h1 className="mb-4 text-2xl font-semibold">Edit Post</h1>

      {/* Form */}
      {post && (
        <form>
          {/* Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={editData.title}
              onChange={handleChange}
            />
          </div>

          {/* Content */}
          <div className="mb-6">
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Content
            </label>
            <textarea
              type="text"
              id="content"
              name="content"
              className="sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={editData.content}
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={editData.category}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <input
              onClick={() => handleSubmit("publish")}
              type="button"
              value="Publish"
              className="cursor-pointer rounded bg-green-700 px-4 py-2 text-white hover:opacity-90"
            />
            <input
              onClick={() => handleSubmit("draft")}
              type="button"
              value="Draft"
              className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:opacity-90"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditPost;
