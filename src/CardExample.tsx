import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import "./styles/StatCards.css";
import { stats } from "./data/stats";
import type { StatItem } from "./data/stats";
import type { JSX } from "react";

function CardExample(): JSX.Element {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {stats.map((item: StatItem, index: number) => (
        <CCard key={index} className="card-border" style={{ width: "150px" }}>
          <CCardBody>
            <CCardTitle style={{ textAlign: "left", marginTop: "-20px" }}>
              😀{item.title}
            </CCardTitle>
            <h2> {item.value}</h2>
            <p style={{ color: "green", textAlign: "left", margin: 0 }}>
              ▲ Added: {item.added}
            </p>
            <p style={{ color: "red", textAlign: "left", margin: 0 }}>
              ▼ Removed: {item.removed}
            </p>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
}

export default CardExample;
