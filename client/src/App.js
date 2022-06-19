import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllPosts from "./pages/AllPosts";
import Sidebar from "./components/Sidebar";
import EditPost from "./pages/EditPost";
import AddNewPost from "./pages/AddNewPost";
import Preview from "./pages/Preview";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow px-12 py-6">
        <Routes>
          <Route path="/" element={<AllPosts />}>
            <Route path="published" element={<AllPosts />} />
            <Route path="drafts" element={<AllPosts />} />
            <Route path="trashed" element={<AllPosts />} />
          </Route>
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/add-new" element={<AddNewPost />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
