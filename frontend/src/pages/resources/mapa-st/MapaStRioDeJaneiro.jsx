import React from "react";
import MapaSt from "./MapaSt";
import { rioDeJaneiroStSections, rioDeJaneiroStSegments, rioDeJaneiroStSources } from "../../../data/mapaStRioDeJaneiro";

const config = {
  state: "Rio de Janeiro",
  stateSlug: "rio-de-janeiro",
  catalogName: "Item do Anexo I",
  catalogDescription: "Consulte 31 registros auditados do Anexo I do Livro II do RICMS/RJ: 15 vigentes, 2 subitens revogados, 4 itens com aplicação suspensa e 10 com alterações materiais. A consulta preserva a distinção entre suspensão de aplicação e revogação.",
  annexes: rioDeJaneiroStSections,
  segments: rioDeJaneiroStSegments,
  sources: rioDeJaneiroStSources,
};

export default function MapaStRioDeJaneiro() { return <MapaSt config={config} />; }
