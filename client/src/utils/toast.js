import { toast } from "react-toastify";

const options = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};
export const success = (message) => {
  toast.success(message, options);
};

export const errorToast = (message) => {
  toast.error(message, options);
};
