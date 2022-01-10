import { toast, ToastOptions, Flip } from 'react-toastify';

export const SuccessToastOption: ToastOptions = {
  type: toast.TYPE.SUCCESS,
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  draggable: true,
  transition: Flip,
};

export const ErrorToastOption: ToastOptions = {
  type: toast.TYPE.ERROR,
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  draggable: true,
  transition: Flip,
};
