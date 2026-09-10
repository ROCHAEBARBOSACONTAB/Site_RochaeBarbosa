import React from "react";
import MapaSt from "./MapaSt";
import { paranaStSections, paranaStSegments, paranaStSources } from "../../../data/mapaStParana";

const config = {
  state: "Paraná",
  stateSlug: "parana",
  catalogName: "Seção do Anexo IX",
  catalogDescription: "Consulte as disposições gerais e as 28 seções do Capítulo I do Anexo IX do RICMS/PR: 18 vigentes, 6 integralmente revogadas e 5 com alterações por itens. A listagem preserva as vigências, revogações e alterações confirmadas na legislação estadual.",
  annexes: paranaStSections,
  segments: paranaStSegments,
  sources: paranaStSources,
};

export default function MapaStParana() {
  return <MapaSt config={config} />;
}
