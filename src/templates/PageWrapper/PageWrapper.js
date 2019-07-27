import React from "react";
import Header from "../../components/Header";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="template-grid">
        <div className="background-gray">SideBar</div>
        <div className="p-20">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
