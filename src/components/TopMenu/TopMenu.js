import React from "react";
import Button from "../Button/Button";

const TopMenu = () => {
  return (
    <div className="d-flex d-flex-space-between d-flex-align-center m-bottom-40">
      <div>
        <Button>Novo Documento</Button>
      </div>
      <ul>
        <li>
          <a className="m-right-10" href="/#">
            Configuracões
          </a>
          <a href="/#">Sair</a>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
