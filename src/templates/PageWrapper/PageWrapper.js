import React from "react";
import Sidebar from "../../components/Sidebar";
import TopMenu from "../../components/TopMenu";
import Notes from "../../containers/Notes";

const PageWrapper = ({ children, hasFoundNote }) => {
  return (
    <div>
      <div className="template-grid">
        <Notes Component={Sidebar} />
        <div className="p-20">
          <Notes Component={TopMenu} hasFoundNote={hasFoundNote} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
