import { useState } from "react";

// custom hook for components using modal
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => setIsShowing(!isShowing);

  return {
    isShowing,
    toggle
  };
};

export default useModal;
