import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllPosts } from "../api/postArticle";
import Table from "../components/Table";
import TabNavigation from "../components/TabNavigation";
import { updateStatus } from "../api/postArticle";
import { success, errorToast } from "../utils/toast";

const AllPost = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const [published, setPublished] = useState(null);
  const [drafts, setDrafts] = useState(null);
  const [trashed, setTrashed] = useState(null);

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setData(data);
        setPublished(data.filter((d) => d.status === "publish"));
        setDrafts(data.filter((d) => d.status === "draft"));
        setTrashed(data.filter((d) => d.status === "trash"));
      })
      .catch((error) => console.log(error));
  }, []);

  const changeStatus = (id, status) => {
    updateStatus(id, { status })
      .then((data) => {
        success(data.message);
        return getAllPosts();
      })
      .then((data) => {
        setData(data);
        setPublished(data.filter((d) => d.status === "publish"));
        setDrafts(data.filter((d) => d.status === "draft"));
        setTrashed(data.filter((d) => d.status === "trash"));
      })
      .catch((error) => {
        errorToast(`${error[0].path}: ${error[0].message}`);
        console.log(error);
      });
  };

  if (data) {
    return (
      <div>
        {/* Header */}
        <h1 className="mb-4 text-2xl font-semibold">All Posts</h1>

        {/* Tabs */}
        <TabNavigation
          published={published}
          drafts={drafts}
          trashed={trashed}
        />

        {/* Table */}
        <Table
          data={
            pathname === "/published" || pathname === "/"
              ? published
              : pathname === "/drafts"
              ? drafts
              : trashed
          }
          changeStatus={changeStatus}
        />
      </div>
    );
  }
};

export default AllPost;
