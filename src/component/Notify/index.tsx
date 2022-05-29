import { toast } from "react-toastify";
export const notify = (type: string, text: string) => {
  toast[type](text, {
    position: "top-right",
    theme: "colored",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
