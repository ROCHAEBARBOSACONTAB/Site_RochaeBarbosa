import React from "react";
import MapaSt from "./MapaSt";
import { rioGrandeDoSulStSections, rioGrandeDoSulStSegments, rioGrandeDoSulStSources } from "../../../data/mapaStRioGrandeDoSul";

const config = {
  state: "Rio Grande do Sul",
  stateSlug: "rio-grande-do-sul",
  catalogName: "Seção e Item",
  catalogDescription: "Consulte os itens do Apêndice II do RICMS/RS. A busca considera o segmento, o status e as movimentações registradas. A página foca a incidência interna; acordos interestaduais exigem consulta própria.",
  annexes: rioGrandeDoSulStSections,
  segments: rioGrandeDoSulStSegments,
  sources: rioGrandeDoSulStSources,
};

export default function MapaStRioGrandeDoSul() {
  return <MapaSt config={config} />;
}
