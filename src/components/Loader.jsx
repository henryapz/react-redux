import { useSelector } from "react-redux";

import loading from "../loading.gif";

const Loader = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <span className="loader">
      {isLoading ? <img src={loading} alt="loading content" /> : null}
    </span>
  );
};

export default Loader;
