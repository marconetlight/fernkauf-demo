import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./ConsoleShell-ZrKgxg2M.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Pages/Live-Versteigerung`,parameters:{layout:`fullscreen`}},o={parameters:{viewport:{defaultViewport:`desktopXl`}},render:()=>(0,i.jsx)(`div`,{style:{width:1920,height:900,display:`flex`,flexDirection:`column`,background:`var(--color-neutral-border-subtle)`,padding:6,boxSizing:`border-box`},children:(0,i.jsx)(r,{activeTab:`live-versteigerung`,onTabChange:()=>{},hideStatusBar:!0})})},s={parameters:{viewport:{defaultViewport:`tablet`}},render:()=>(0,i.jsx)(`div`,{style:{width:768,height:1024,display:`flex`,flexDirection:`column`,background:`var(--color-neutral-border-subtle)`,padding:6,boxSizing:`border-box`},children:(0,i.jsx)(r,{activeTab:`live-versteigerung`,onTabChange:()=>{},hideStatusBar:!0})})},c={parameters:{viewport:{defaultViewport:`mobile`}},render:()=>(0,i.jsx)(`div`,{style:{width:390,height:844,display:`flex`,flexDirection:`column`,background:`var(--color-neutral-border-subtle)`,padding:6,boxSizing:`border-box`},children:(0,i.jsx)(r,{activeTab:`live-versteigerung`,onTabChange:()=>{},hideStatusBar:!0})})},l=o,o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktopXl"
    }
  },
  render: () => <div style={{
    width: 1920,
    height: 900,
    display: "flex",
    flexDirection: "column",
    background: "var(--color-neutral-border-subtle)",
    padding: 6,
    boxSizing: "border-box"
  }}>
      <ConsoleShell activeTab="live-versteigerung" onTabChange={() => {}} hideStatusBar />
    </div>
}`,...o.parameters?.docs?.source},description:{story:`Desktop layout (1920×900) — original 2-column grid`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    }
  },
  render: () => <div style={{
    width: 768,
    height: 1024,
    display: "flex",
    flexDirection: "column",
    background: "var(--color-neutral-border-subtle)",
    padding: 6,
    boxSizing: "border-box"
  }}>
      <ConsoleShell activeTab="live-versteigerung" onTabChange={() => {}} hideStatusBar />
    </div>
}`,...s.parameters?.docs?.source},description:{story:`Tablet layout (768×1024) — single column, all panels stacked`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile"
    }
  },
  render: () => <div style={{
    width: 390,
    height: 844,
    display: "flex",
    flexDirection: "column",
    background: "var(--color-neutral-border-subtle)",
    padding: 6,
    boxSizing: "border-box"
  }}>
      <ConsoleShell activeTab="live-versteigerung" onTabChange={() => {}} hideStatusBar />
    </div>
}`,...c.parameters?.docs?.source},description:{story:`Mobile layout (390×844) — bottom tab bar, one panel at a time`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Desktop`,...l.parameters?.docs?.source},description:{story:`@deprecated Use Desktop instead`,...l.parameters?.docs?.description}}},u=[`Desktop`,`Tablet`,`Mobile`,`Default`]}))();export{l as Default,o as Desktop,c as Mobile,s as Tablet,u as __namedExportsOrder,a as default};