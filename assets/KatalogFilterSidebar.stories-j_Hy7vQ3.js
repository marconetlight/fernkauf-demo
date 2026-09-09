import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BD_EiCn8.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{f as i,o as a}from"./KatalogFilterSidebar-DsI23tg6.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Katalog/FilterSidebar`,parameters:{layout:`centered`}},l={render:()=>{let[e,t]=(0,o.useState)({anlieferer:[],artikelBez:[],verstGr:[],land:[],qualitaet:[],zertifizierung:[]}),[n,r]=(0,o.useState)(null),[i,c]=(0,o.useState)(``);return(0,s.jsx)(`div`,{style:{width:280,background:`var(--color-neutral-surface-muted)`,padding:8,borderRadius:12},children:(0,s.jsx)(a,{filters:e,onToggleOption:(e,n)=>t(t=>{let r=t[e];return{...t,[e]:r.includes(n)?r.filter(e=>e!==n):[...r,n]}}),onReset:()=>t({anlieferer:[],artikelBez:[],verstGr:[],land:[],qualitaet:[],zertifizierung:[]}),onApply:()=>{},openFilter:n,setOpenFilter:r,onSaveSelection:()=>{},artFilter:i,setArtFilter:c})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<FilterState>({
      anlieferer: [],
      artikelBez: [],
      verstGr: [],
      land: [],
      qualitaet: [],
      zertifizierung: []
    });
    const [openFilter, setOpenFilter] = useState<keyof FilterState | null>(null);
    const [artFilter, setArtFilter] = useState<ArtFilter>("");
    return <div style={{
      width: 280,
      background: "var(--color-neutral-surface-muted)",
      padding: 8,
      borderRadius: 12
    }}>
        <KatalogFilterSidebar filters={filters} onToggleOption={(key, val) => setFilters(f => {
        const arr = f[key];
        return {
          ...f,
          [key]: arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]
        };
      })} onReset={() => setFilters({
        anlieferer: [],
        artikelBez: [],
        verstGr: [],
        land: [],
        qualitaet: [],
        zertifizierung: []
      })} onApply={() => {}} openFilter={openFilter} setOpenFilter={setOpenFilter} onSaveSelection={() => {}} artFilter={artFilter} setArtFilter={setArtFilter} />
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`Filter sidebar for the Katalog page.
PO can explore dropdown filters, toggle auto-mark, save selections.`,...l.parameters?.docs?.description}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};