import { Slide, toast } from "react-toastify";

export function showToastify() {
  return toast.success('Camiseta adicionada a Sacola!', {
    position: "top-center",
    autoClose: 1250,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide
    });
}