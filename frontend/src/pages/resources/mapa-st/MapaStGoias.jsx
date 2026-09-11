import React from "react";
import MapaSt from "./MapaSt";
import { goiasStSections, goiasStSegments, goiasStSources } from "../../../data/mapaStGoias";

const config = {
  state: "Goiás",
  stateSlug: "goias",
  catalogName: "Inciso do Apêndice II",
  catalogDescription: "Consulte os 32 registros auditados do Anexo VIII do RCTE/GO: 8 vigentes, 20 referências revogadas e 4 com alterações por itens ou regras materiais. O catálogo separa os incisos do Apêndice II das referências históricas dos Apêndices I e X.",
  annexes: goiasStSections,
  segments: goiasStSegments,
  sources: goiasStSources,
};

export default function MapaStGoias() { return <MapaSt config={config} />; }
