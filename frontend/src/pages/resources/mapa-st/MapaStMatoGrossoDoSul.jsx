import React from "react";
import MapaSt from "./MapaSt";
import { matoGrossoDoSulStSections, matoGrossoDoSulStSegments, matoGrossoDoSulStSources } from "../../../data/mapaStMatoGrossoDoSul";

const config = {
  state: "Mato Grosso do Sul", stateSlug: "mato-grosso-do-sul", catalogName: "Segmento do Subanexo I",
  catalogDescription: "Consulte os 28 segmentos do Subanexo I do Anexo III do RICMS/MS: 20 vigentes, 4 revogados ou incorporados e 4 com alterações por itens. A listagem registra revogações e alterações materiais por item.",
  annexes: matoGrossoDoSulStSections, segments: matoGrossoDoSulStSegments, sources: matoGrossoDoSulStSources,
};

export default function MapaStMatoGrossoDoSul() { return <MapaSt config={config} />; }
