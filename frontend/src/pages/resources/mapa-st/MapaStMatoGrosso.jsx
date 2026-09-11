import React from "react";
import MapaSt from "./MapaSt";
import { matoGrossoStSections, matoGrossoStSegments, matoGrossoStSources } from "../../../data/mapaStMatoGrosso";

const config = {
  state: "Mato Grosso",
  stateSlug: "mato-grosso",
  catalogName: "Segmento da Tabela I",
  catalogDescription: "Consulte os 25 segmentos da Tabela I do Apêndice do Anexo X do RICMS/MT: 21 vigentes e 4 com alterações ou revogações de itens registradas no texto consolidado.",
  annexes: matoGrossoStSections,
  segments: matoGrossoStSegments,
  sources: matoGrossoStSources,
};

export default function MapaStMatoGrosso() {
  return <MapaSt config={config} />;
}
