import React from "react";
import MapaSt from "./MapaSt";
import { santaCatarinaStSections, santaCatarinaStSegments, santaCatarinaStSources } from "../../../data/mapaStSantaCatarina";

const config = {
  state: "Santa Catarina",
  stateSlug: "santa-catarina",
  catalogName: "Seção vigente",
  catalogDescription: "Consulte as 26 seções relevantes do Anexo 1-A do RICMS/SC-01: 10 vigentes e 16 revogadas. A listagem preserva a rastreabilidade de vigências, revogações e alterações relevantes para a incidência interna.",
  annexes: santaCatarinaStSections,
  segments: santaCatarinaStSegments,
  sources: santaCatarinaStSources,
};

export default function MapaStSantaCatarina() {
  return <MapaSt config={config} />;
}
