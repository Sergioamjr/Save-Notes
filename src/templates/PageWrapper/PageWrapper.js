import React from "react";
import Sidebar from "../../components/Sidebar";
import TopMenu from "../../components/TopMenu";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <div className="template-grid">
        <Sidebar />
        <div className="p-20">
          <TopMenu />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
