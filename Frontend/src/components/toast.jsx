import toast, { Toaster } from "react-hot-toast";

const successToast = (message) => toast.success(message);

const errorToast = (message) => toast.error(message);

export { successToast, errorToast, Toaster };
