import React from "react";
import { IoConstructSharp } from "react-icons/io5";

const NotReady = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <IoConstructSharp size={30} color="#C79101" />
      <p className="font-medium text-sm text-center">
        This section is not ready yet.
      </p>
    </div>
  );
};

export default NotReady;
