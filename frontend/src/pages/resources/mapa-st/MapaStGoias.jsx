import React from "react";
import MapaSt from "./MapaSt";
import { goiasStSections, goiasStSegments, goiasStSources } from "../../../data/mapaStGoias";

const config = {
  state: "Goiás",
  stateSlug: "goias",
  catalogName: "Inciso do Apêndice II",
  catalogDescription: "Consulte os 18 incisos auditados do Apêndice II do Anexo VIII do RCTE/GO: 8 vigentes, 6 excluídos integralmente e 4 com alterações por itens ou regras materiais.",
  annexes: goiasStSections,
  segments: goiasStSegments,
  sources: goiasStSources,
};

export default function MapaStGoias() { return <MapaSt config={config} />; }
