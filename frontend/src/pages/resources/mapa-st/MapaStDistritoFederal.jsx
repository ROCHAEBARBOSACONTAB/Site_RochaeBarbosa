import React from "react";
import MapaSt from "./MapaSt";
import { distritoFederalStSections, distritoFederalStSegments, distritoFederalStSources } from "../../../data/mapaStDistritoFederal";

const config = {
  state: "Distrito Federal",
  stateSlug: "distrito-federal",
  catalogName: "Registro do Anexo IV",
  catalogDescription: "Consulte os 69 registros auditados do Anexo IV do RICMS/DF: 41 vigentes, 18 referências revogadas e 10 com alterações por itens. A consulta separa mercadorias subsequentes, operações antecedentes e serviços para preservar o alcance de cada Caderno.",
  annexes: distritoFederalStSections,
  segments: distritoFederalStSegments,
  sources: distritoFederalStSources,
};

export default function MapaStDistritoFederal() { return <MapaSt config={config} />; }
