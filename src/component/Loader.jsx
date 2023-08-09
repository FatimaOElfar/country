import { useEffect } from "react";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = ({ loading }) => {
  const [loadingState, setLoadingState] = useState(loading);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-[80%] mx-auto">
        <PulseLoader
          loading={loadingState}
          color="#000"
          cssOverride={{}}
          margin={5}
          size={26}
          speedMultiplier={1}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Loader;
