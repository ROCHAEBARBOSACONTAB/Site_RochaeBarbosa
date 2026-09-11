import React from "react";
import MapaSt from "./MapaSt";
import { espiritoSantoStSections, espiritoSantoStSegments, espiritoSantoStSources } from "../../../data/mapaStEspiritoSanto";

const config = {
  state: "Espírito Santo",
  stateSlug: "espirito-santo",
  catalogName: "Grupo regulado",
  catalogDescription: "Consulte 32 registros auditados no Espírito Santo: 18 vigentes, 8 referências históricas revogadas, 1 grupo com regime substituído e 5 grupos com alterações materiais. Autopeças é apresentado separadamente porque passou de ST para antecipação parcial.",
  annexes: espiritoSantoStSections,
  segments: espiritoSantoStSegments,
  sources: espiritoSantoStSources,
};

export default function MapaStEspiritoSanto() { return <MapaSt config={config} />; }
