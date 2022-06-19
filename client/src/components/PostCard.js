const PostCard = ({ post }) => {
  return (
    <div className="mb-8 max-w-xl rounded-lg border p-4">
      <div className="group">
        <p className="block text-sm">{post.category}</p>
        <p className="text-xl font-medium text-blue-700 decoration-2 visited:text-purple-600 group-hover:underline">
          {post.title}
        </p>
      </div>
      <p className="mb-2 text-justify text-sm line-clamp-4">{post.content}</p>
      <button className="rounded bg-blue-700 px-2 py-1 text-xs text-white hover:opacity-90">
        Read more...
      </button>
    </div>
  );
};

export default PostCard;
