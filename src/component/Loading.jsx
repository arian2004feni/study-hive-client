import React from 'react';

const Loading = () => {
    return (
      <div className="inset-1 w-full h-screen fixed z-40 flex justify-center bg-black/50 backdrop-blur-xs">
        <div className="flex flex-col items-center text-white pt-48 space-y-4">
          {/* <Loader2 className="h-12 w-12 animate-spin text-white" /> */}
          <span className="loading loading-spinner w-16"></span>
          <p className="text-white text-sm opacity-80">Loading, please wait...</p>
        </div>
      </div>
    );
};

export default Loading;