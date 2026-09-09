import React from "react";
import MapaSt from "./MapaSt";
import { minasGeraisStSections, minasGeraisStSegments, minasGeraisStSources } from "../../../data/mapaStMinasGerais";

const config = {
  state: "Minas Gerais",
  stateSlug: "minas-gerais",
  catalogName: "Capítulo",
  catalogDescription: "Consulte os capítulos da Parte 2 do Anexo VII do RICMS/2023. A busca considera o segmento, NCM, CEST, âmbito de aplicação e movimentações que venham a ser registradas. Esta etapa trata a incidência interna.",
  annexes: minasGeraisStSections,
  segments: minasGeraisStSegments,
  sources: minasGeraisStSources,
};

export default function MapaStMinasGerais() {
  return <MapaSt config={config} />;
}
