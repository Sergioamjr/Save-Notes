import React from "react";

const Header = () => {
  return (
    <header className="background-theme p-top-20 p-bottom-20">
      <div className="container">
        <div className="d-flex d-flex-align-center d-flex-space-between">
          <h1 className="color-white fs-5">MyNotes</h1>
          <div>
            <ul>
              <li className="color-white">Sair</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
