import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{a as n,i as r,n as i,t as a}from"./verbindung-bgcFSL6j.js";import{n as o,t as s}from"./StatusBar-Jszcll2d.js";var c,l,u,d,f,p,m;e((()=>{o(),n(),i(),c=t(),l={title:`Live-Versteigerung/StatusBar`,parameters:{layout:`fullscreen`}},u={render:()=>(0,c.jsx)(`div`,{style:{background:`var(--color-neutral-border-subtle)`,padding:6},children:(0,c.jsx)(s,{activeTab:`live-versteigerung`,onTabChange:()=>{},onSupport:()=>{},layout:`desktop`})})},d={render:()=>(0,c.jsx)(`div`,{style:{background:`var(--color-neutral-border-subtle)`,padding:6,maxWidth:390},children:(0,c.jsx)(s,{activeTab:`live-versteigerung`,onTabChange:()=>{},onSupport:()=>{},layout:`mobile`})})},f={render:()=>(0,c.jsx)(r,{gesperrt:!0,children:(0,c.jsx)(`div`,{style:{background:`var(--color-neutral-border-subtle)`,padding:6},children:(0,c.jsx)(s,{activeTab:`live-versteigerung`,onTabChange:()=>{},onSupport:()=>{},layout:`desktop`})})})},p={render:()=>(0,c.jsx)(a,{stabil:!1,children:(0,c.jsx)(`div`,{style:{background:`var(--color-neutral-border-subtle)`,padding:6},children:(0,c.jsx)(s,{activeTab:`live-versteigerung`,onTabChange:()=>{},onSupport:()=>{},layout:`desktop`})})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "var(--color-neutral-border-subtle)",
    padding: 6
  }}>
      <StatusBar activeTab="live-versteigerung" onTabChange={() => {}} onSupport={() => {}} layout="desktop" />
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Desktop layout: full icon + label nav, "Kauftaste sperren" toggle,
connection label visible.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "var(--color-neutral-border-subtle)",
    padding: 6,
    maxWidth: 390
  }}>
      <StatusBar activeTab="live-versteigerung" onTabChange={() => {}} onSupport={() => {}} layout="mobile" />
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Mobile layout: icons only, secondary controls hidden to preserve space.
Connection shown as icon only.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <KauftasteAnbieter gesperrt>
      <div style={{
      background: "var(--color-neutral-border-subtle)",
      padding: 6
    }}>
        <StatusBar activeTab="live-versteigerung" onTabChange={() => {}} onSupport={() => {}} layout="desktop" />
      </div>
    </KauftasteAnbieter>
}`,...f.parameters?.docs?.source},description:{story:`Kauftaste gesperrt: Icon mit Schloss, Wort und Schalter auf Korall. Der
Schalter bleibt bedienbar, die Story startet nur im gesperrten Zustand.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <VerbindungAnbieter stabil={false}>
      <div style={{
      background: "var(--color-neutral-border-subtle)",
      padding: 6
    }}>
        <StatusBar activeTab="live-versteigerung" onTabChange={() => {}} onSupport={() => {}} layout="desktop" />
      </div>
    </VerbindungAnbieter>
}`,...p.parameters?.docs?.source},description:{story:`Instabile Verbindung: Blush als Scheibe, Korall als Blitz und Wort.`,...p.parameters?.docs?.description}}},m=[`Desktop`,`Mobile`,`DesktopGesperrt`,`DesktopVerbindungInstabil`]}))();export{u as Desktop,f as DesktopGesperrt,p as DesktopVerbindungInstabil,d as Mobile,m as __namedExportsOrder,l as default};