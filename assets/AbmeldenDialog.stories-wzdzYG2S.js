import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BD_EiCn8.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{i,n as a,r as o,t as s}from"./AbmeldenDialog-CmzDYSoV.js";var c,l,u,d,f;e((()=>{c=t(n(),1),a(),o(),l=r(),u={title:`Nutzerkonto/AbmeldenDialog`,parameters:{layout:`fullscreen`}},d={render:()=>{let[e,t]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,position:`relative`,background:`var(--color-neutral-surface-muted)`},children:[(0,l.jsx)(`button`,{type:`button`,style:i.outlineBtn,onClick:()=>t(!0),children:`Abmelden-Dialog öffnen`}),(0,l.jsx)(s,{open:e,onConfirm:()=>t(!1),onCancel:()=>t(!1)})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      width: "100vw",
      height: "100vh",
      position: "relative",
      background: "var(--color-neutral-surface-muted)"
    }}>
        <button type="button" style={s.outlineBtn} onClick={() => setOpen(true)}>
          Abmelden-Dialog öffnen
        </button>
        <AbmeldenDialog open={open} onConfirm={() => setOpen(false)} onCancel={() => setOpen(false)} />
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`Bestätigungsdialog vor dem Abmelden aus dem Fernkauf — erscheint, wenn der
Nutzer in der Nutzerkonto-Sidebar auf "Abmelden" klickt.`,...d.parameters?.docs?.description}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};