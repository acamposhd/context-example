import React, { useContext } from "react";

import { GlobalContext } from "../../context/global/global.context";

function ComponenteBisNieto() {
  const { count } = useContext(GlobalContext);
  return (
    <div>
      <h4>Componente BisNieto</h4>
      <p>Counter en el BisNieto: {count ?? "No se ha recibido el dato"}</p>
    </div>
  );
}

export default ComponenteBisNieto;
