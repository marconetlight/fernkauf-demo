import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{l as n,u as r}from"./mock-CvLkU-js.js";import{n as i,r as a,t as o}from"./TransactionFilterSidebar-BPL2rkpE.js";var s,c,l,u;e((()=>{r(),a(),s=t(),c={title:`Transaktionen/FilterSidebar`,parameters:{layout:`centered`}},l={render:()=>(0,s.jsx)(`div`,{style:{background:`var(--color-neutral-surface-muted)`,padding:8,borderRadius:12},children:(0,s.jsx)(o,{summary:i(n)})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const summary = computeSummary(TRANSAKTIONEN);
    return <div style={{
      background: "var(--color-neutral-surface-muted)",
      padding: 8,
      borderRadius: 12
    }}>
        <TransactionFilterSidebar summary={summary} />
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`Filter sidebar for the Transaktionen page.
Zeigt aktuell nur noch die Zusammenfassungs-KPIs (Gesamtsumme, Menge, Käufe);
die Filter-Dropdowns sind ausgeblendet, Filterung erfolgt über die Suchleiste in der Tabelle.`,...l.parameters?.docs?.description}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};