import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,i as r,n as i,t as a}from"./verbindung-bgcFSL6j.js";import{n as o,r as s,t as c}from"./ActiveClockPanel-KlMFxD9r.js";var l,u,d,f,p,m,h;e((()=>{s(),n(),i(),l=t(),u={title:`Features/ActiveClockPanel`,component:c,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktopXl`}}},d={render:()=>(0,l.jsx)(`div`,{style:{width:`38vw`,minWidth:420,maxWidth:730,height:`100vh`,background:`var(--color-neutral-border-default)`,padding:8,boxSizing:`border-box`,display:`flex`},children:(0,l.jsx)(c,{})})},f={render:()=>(0,l.jsx)(`div`,{style:{width:400,height:700,background:`var(--color-neutral-border-default)`,padding:8,boxSizing:`border-box`,display:`flex`},children:(0,l.jsx)(o,{})})},p={render:()=>(0,l.jsx)(r,{gesperrt:!0,children:(0,l.jsx)(`div`,{style:{width:`38vw`,minWidth:420,maxWidth:730,height:`100vh`,background:`var(--color-neutral-border-default)`,padding:8,boxSizing:`border-box`,display:`flex`},children:(0,l.jsx)(c,{})})})},m={render:()=>(0,l.jsx)(a,{stabil:!1,children:(0,l.jsx)(`div`,{style:{width:`38vw`,minWidth:420,maxWidth:730,height:`100vh`,background:`var(--color-neutral-border-default)`,padding:8,boxSizing:`border-box`,display:`flex`},children:(0,l.jsx)(c,{})})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () =>
  // Nachbildung des realen Console-Grids: Hauptuhr-Panel ~730px breit bei
  // ~1900px Fensterbreite (50/50 Split mit "Nachfolgende Partien"),
  // volle verfügbare Höhe — damit die Uhr im gewählten Storybook-Viewport
  // genauso mitwächst wie im echten Fernkauf-Fenster.
  <div style={{
    width: "38vw",
    minWidth: 420,
    maxWidth: 730,
    height: "100vh",
    background: "var(--color-neutral-border-default)",
    padding: 8,
    boxSizing: "border-box",
    display: "flex"
  }}>
      <ActiveClockPanel />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    height: 700,
    background: "var(--color-neutral-border-default)",
    padding: 8,
    boxSizing: "border-box",
    display: "flex"
  }}>
      <ActiveClockPanelNarrow />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <KauftasteAnbieter gesperrt>
      <div style={{
      width: "38vw",
      minWidth: 420,
      maxWidth: 730,
      height: "100vh",
      background: "var(--color-neutral-border-default)",
      padding: 8,
      boxSizing: "border-box",
      display: "flex"
    }}>
        <ActiveClockPanel />
      </div>
    </KauftasteAnbieter>
}`,...p.parameters?.docs?.source},description:{story:`Kauftaste gesperrt — Korall-Rahmen an der Karte, Karten-Nr. gesperrt.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <VerbindungAnbieter stabil={false}>
      <div style={{
      width: "38vw",
      minWidth: 420,
      maxWidth: 730,
      height: "100vh",
      background: "var(--color-neutral-border-default)",
      padding: 8,
      boxSizing: "border-box",
      display: "flex"
    }}>
        <ActiveClockPanel />
      </div>
    </VerbindungAnbieter>
}`,...m.parameters?.docs?.source},description:{story:`Verbindung instabil — Korall-Rahmen und die Pille, die es benennt.`,...m.parameters?.docs?.description}}},h=[`Default`,`NarrowTablet`,`Gesperrt`,`VerbindungInstabil`]}))();export{d as Default,p as Gesperrt,f as NarrowTablet,m as VerbindungInstabil,h as __namedExportsOrder,u as default};