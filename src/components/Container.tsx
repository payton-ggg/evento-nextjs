import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="flex flex-col m-auto bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
};
