import { useState } from "react";

const useLoading = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return { imageLoaded, setImageLoaded };
};

export default useLoading;
