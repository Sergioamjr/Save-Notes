import React from "react";
import Sidebar from "../../components/Sidebar";
import TopMenu from "../../components/TopMenu";
import Notes from "../../containers/Notes";

const PageWrapper = ({ children, hasFoundNote }) => {
  const [isMenuOpened, setMenuState] = React.useState(false);

  const toggleMenuHandler = () => {
    setMenuState(!isMenuOpened);
  };
  return (
    <div>
      <div className="template-grid overflow-hidden">
        <Notes isMenuOpened={isMenuOpened} Component={Sidebar} />
        <div className="p-20 overflow-auto">
          <Notes
            toggleMenuHandler={toggleMenuHandler}
            Component={TopMenu}
            hasFoundNote={hasFoundNote}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
