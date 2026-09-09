import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BD_EiCn8.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{r as i,t as a}from"./KatalogPriceDialog-DdtNqTSm.js";var o,s,c,l,u,d;e((()=>{i(),o=t(n(),1),s=r(),c={title:`Katalog/PriceDialog`,parameters:{layout:`fullscreen`}},l={render:()=>{let[e,t]=(0,o.useState)({open:!0,rowIdx:3,price:``,menge:``,rest:!1});return(0,s.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,position:`relative`,background:`rgba(0,0,0,0.3)`},children:(0,s.jsx)(a,{dialog:e,setDialog:t,prices:{},onSave:()=>t(e=>({...e,open:!1})),onRemove:()=>t(e=>({...e,open:!1})),onNavigate:e=>t(t=>({...t,rowIdx:e===`prev`?Math.max(0,(t.rowIdx??0)-1):Math.min(15,(t.rowIdx??0)+1)})),rowIndices:Array.from({length:16},(e,t)=>t)})})}},u={render:()=>{let[e,t]=(0,o.useState)({open:!0,rowIdx:3,price:`0,85`,menge:`20`,rest:!0});return(0,s.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,position:`relative`,background:`rgba(0,0,0,0.3)`},children:(0,s.jsx)(a,{dialog:e,setDialog:t,prices:{3:{price:85,menge:20,rest:!0}},onSave:()=>t(e=>({...e,open:!1})),onRemove:()=>t(e=>({...e,open:!1}))})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dialog, setDialog] = useState<DialogState>({
      open: true,
      rowIdx: 3,
      price: "",
      menge: "",
      rest: false
    });
    return <div style={{
      width: "100vw",
      height: "100vh",
      position: "relative",
      background: "rgba(0,0,0,0.3)"
    }}>
        <KatalogPriceDialog dialog={dialog} setDialog={setDialog} prices={{}} onSave={() => setDialog(d => ({
        ...d,
        open: false
      }))} onRemove={() => setDialog(d => ({
        ...d,
        open: false
      }))} onNavigate={dir => setDialog(d => ({
        ...d,
        rowIdx: dir === "prev" ? Math.max(0, (d.rowIdx ?? 0) - 1) : Math.min(15, (d.rowIdx ?? 0) + 1)
      }))} rowIndices={Array.from({
        length: 16
      }, (_, i) => i)} />
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`Detail-Drawer zum Hinterlegen eines Vorstellungspreises (Zielpreis) für eine Partie.
Öffnet sich rechts über dem Katalog, wenn der Käufer auf den €-Button in einer Zeile klickt.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dialog, setDialog] = useState<DialogState>({
      open: true,
      rowIdx: 3,
      price: "0,85",
      menge: "20",
      rest: true
    });
    return <div style={{
      width: "100vw",
      height: "100vh",
      position: "relative",
      background: "rgba(0,0,0,0.3)"
    }}>
        <KatalogPriceDialog dialog={dialog} setDialog={setDialog} prices={{
        3: {
          price: 85,
          menge: 20,
          rest: true
        }
      }} onSave={() => setDialog(d => ({
        ...d,
        open: false
      }))} onRemove={() => setDialog(d => ({
        ...d,
        open: false
      }))} />
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:`Zustand mit bereits hinterlegtem Preis — zeigt den "Preis entfernen"-Button.`,...u.parameters?.docs?.description}}},d=[`Default`,`MitHinterlegtemPreis`]}))();export{l as Default,u as MitHinterlegtemPreis,d as __namedExportsOrder,c as default};