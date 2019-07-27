import React from "react";
import Sidebar from "../../components/Sidebar";
import TopMenu from "../../components/TopMenu";
import Notes from "../../containers/Notes";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <div className="template-grid">
        <Notes Component={Sidebar} />
        <div className="p-20">
          <TopMenu />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
