import { useEffect, useState } from "react";
import { getAllPosts } from "../api/postArticle";
import Pagination from "../components/Pagination";
import PostCard from "../components/PostCard";

const Preview = () => {
  const [limit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [published, setPublished] = useState(null);

  useEffect(() => {
    getAllPosts(limit, offset, "publish")
      .then((data) => {
        setPublished(data.filter((d) => d.status === "publish"));
      })
      .catch((error) => console.log(error));
  }, [limit, offset]);

  return (
    <div>
      {/* Header */}
      <div className="mb-8 border-b pb-4 ">
        <h1 className="text-2xl font-semibold">Published Posts</h1>
      </div>

      {published?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {published && <Pagination limit={limit} setOffset={setOffset} />}
    </div>
  );
};

export default Preview;
