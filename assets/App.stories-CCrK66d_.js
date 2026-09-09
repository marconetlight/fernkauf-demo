import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BD_EiCn8.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{a as i,i as a,n as o,t as s}from"./verbindung-bgcFSL6j.js";import{n as c,t as l}from"./StatusBar-Jszcll2d.js";import{n as u,t as d}from"./ConsoleShell-ZrKgxg2M.js";import{n as f,t as p}from"./KatalogView-gHC-Kbq1.js";import{n as m,t as h}from"./TransactionsFullView-zfrhMl06.js";import{n as g,t as _}from"./HandelsportalPanel-DmeBT5mu.js";import{n as v,t as y}from"./NutzerkontoView-D5KPQaxw.js";function b({layout:e}){let[t,n]=(0,x.useState)(`live-versteigerung`),r=e=>n(e),[i,o]=(0,x.useState)(`kontodaten`);return(0,S.jsx)(a,{children:(0,S.jsx)(s,{children:(0,S.jsxs)(`div`,{className:`w-full h-full flex flex-col bg-neutral-border-default text-neutral-primary overflow-hidden`,children:[(0,S.jsx)(`div`,{className:`px-[6px] pt-[6px]`,children:(0,S.jsx)(l,{activeTab:t,onTabChange:r,onSupport:()=>{o(`hilfe`),n(`nutzerkonto`)},layout:e===`mobile`?`mobile`:`desktop`})}),(0,S.jsxs)(`div`,{className:`flex-1 min-h-0 px-[6px] pb-[6px] pt-[6px]`,children:[t===`live-versteigerung`&&(0,S.jsx)(d,{activeTab:t,onTabChange:r,hideStatusBar:!0,layout:e}),t===`katalog`&&(0,S.jsx)(p,{onBack:()=>n(`live-versteigerung`)}),t===`transaktionen`&&(0,S.jsx)(h,{onBack:()=>n(`live-versteigerung`)}),t===`handelsportal`&&(0,S.jsx)(_,{}),t===`nutzerkonto`&&(0,S.jsx)(y,{onClose:()=>n(`live-versteigerung`),startSection:i})]})]})})})}var x,S,C=e((()=>{x=t(n(),1),c(),u(),i(),o(),f(),m(),g(),v(),S=r(),b.__docgenInfo={description:``,methods:[],displayName:`App`,props:{layout:{required:!1,tsType:{name:`union`,raw:`"mobile" | "tablet" | "desktop"`,elements:[{name:`literal`,value:`"mobile"`},{name:`literal`,value:`"tablet"`},{name:`literal`,value:`"desktop"`}]},description:``}}}})),w,T,E,D;e((()=>{C(),w=r(),T={title:`Prototype/Fernkauf App`,parameters:{layout:`fullscreen`}},E={parameters:{viewport:{defaultViewport:`desktopXl`}},render:()=>(0,w.jsx)(`div`,{style:{width:1920,height:`100vh`},children:(0,w.jsx)(b,{layout:`desktop`})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktopXl"
    }
  },
  render: () => <div style={{
    width: 1920,
    height: "100vh"
  }}>
      <App layout="desktop" />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Vollständiger Prototype — alle Tabs navigierbar.
Hinweis: KatalogView, Transaktionen, Handelsportal und Nutzerkonto
sind nur für Desktop optimiert. Tablet/Mobile gilt nur für die
Live-Versteigerung (ConsoleShell).`,...E.parameters?.docs?.description}}},D=[`Desktop`]}))();export{E as Desktop,D as __namedExportsOrder,T as default};