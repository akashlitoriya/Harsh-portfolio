import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-backdrop">
      <div className="w-full h-full flex justify-center items-center z-50 bg-transparent backdrop-blur-lg">
        <div className="flex space-x-2 justify-center items-center h-screen">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
