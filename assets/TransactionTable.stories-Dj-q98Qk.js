import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BD_EiCn8.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{l as i,u as a}from"./mock-CvLkU-js.js";import{n as o,t as s}from"./transactionColumns-BnMxoLqh.js";import{n as c,r as l,t as u}from"./TransactionTable-Bg7IbJ4K.js";var d,f,p,m,h,g,_;e((()=>{d=t(n(),1),a(),l(),f=r(),p={title:`Transaktionen/TransactionTable`,parameters:{layout:`fullscreen`}},m={render:()=>{let[e,t]=(0,d.useState)(`uhr`),[n,r]=(0,d.useState)(`asc`),[a,l]=(0,d.useState)(``),[p,m]=(0,d.useState)(s);function h(n){n===e?r(e=>e===`asc`?`desc`:`asc`):(t(n),r(`asc`))}let g=o.find(t=>t.key===e);return(0,f.jsx)(`div`,{style:{display:`flex`,height:`100vh`,padding:24,background:`var(--color-neutral-surface-muted)`,boxSizing:`border-box`},children:(0,f.jsx)(u,{rows:[...i].sort((e,t)=>g?c(e,t,g,n):0).filter(e=>!a.trim()||[e.artikel,e.anlieferer,e.uhr].join(` `).toLowerCase().includes(a.toLowerCase())),sortKey:e,sortDir:n,onSort:h,searchQuery:a,setSearchQuery:l,activeCols:p,toggleCol:e=>m(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),setActiveCols:m})})}},h={render:()=>{let[e,t]=(0,d.useState)(`uhr`),[n,r]=(0,d.useState)(`asc`),[i,a]=(0,d.useState)(``),[o,c]=(0,d.useState)(s);return(0,f.jsx)(`div`,{style:{display:`flex`,height:`100vh`,padding:24,background:`var(--color-neutral-surface-muted)`,boxSizing:`border-box`},children:(0,f.jsx)(u,{rows:[],sortKey:e,sortDir:n,onSort:n=>{n===e?r(e=>e===`asc`?`desc`:`asc`):(t(n),r(`asc`))},searchQuery:i,setSearchQuery:a,activeCols:o,toggleCol:e=>c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),setActiveCols:c})})}},g={render:()=>{let[e,t]=(0,d.useState)(`uhr`),[n,r]=(0,d.useState)(`asc`),[a,o]=(0,d.useState)(`Xyz nicht vorhanden`),[c,l]=(0,d.useState)(s);return(0,f.jsx)(`div`,{style:{display:`flex`,height:`100vh`,padding:24,background:`var(--color-neutral-surface-muted)`,boxSizing:`border-box`},children:(0,f.jsx)(u,{rows:i.filter(e=>[e.artikel,e.anlieferer,e.uhr].join(` `).toLowerCase().includes(a.toLowerCase())),sortKey:e,sortDir:n,onSort:n=>{n===e?r(e=>e===`asc`?`desc`:`asc`):(t(n),r(`asc`))},searchQuery:a,setSearchQuery:o,activeCols:c,toggleCol:e=>l(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),setActiveCols:l})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortKey, setSortKey] = useState<keyof Transaktion>("uhr");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCols, setActiveCols] = useState<(keyof Transaktion)[]>(DEFAULT_VISIBLE_COLS);
    function handleSort(key: keyof Transaktion) {
      if (key === sortKey) setSortDir(d => d === "asc" ? "desc" : "asc");else {
        setSortKey(key);
        setSortDir("asc");
      }
    }
    const sortCol = TRANSACTION_ALL_COLS.find(c => c.key === sortKey);
    const rows = [...TRANSAKTIONEN].sort((a, b) => sortCol ? compareTransaktionen(a, b, sortCol, sortDir) : 0).filter(r => !searchQuery.trim() || [r.artikel, r.anlieferer, r.uhr].join(" ").toLowerCase().includes(searchQuery.toLowerCase()));
    return <div style={{
      display: "flex",
      height: "100vh",
      padding: 24,
      background: "var(--color-neutral-surface-muted)",
      boxSizing: "border-box"
    }}>
        <TransactionTable rows={rows} sortKey={sortKey} sortDir={sortDir} onSort={handleSort} searchQuery={searchQuery} setSearchQuery={setSearchQuery} activeCols={activeCols} toggleCol={key => setActiveCols(cols => cols.includes(key) ? cols.filter(k => k !== key) : [...cols, key])} setActiveCols={setActiveCols} />
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`The transaction data grid — every column sortable via header click, searchable.
Used inside the Transaktionen full-page view.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortKey, setSortKey] = useState<keyof Transaktion>("uhr");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCols, setActiveCols] = useState<(keyof Transaktion)[]>(DEFAULT_VISIBLE_COLS);
    return <div style={{
      display: "flex",
      height: "100vh",
      padding: 24,
      background: "var(--color-neutral-surface-muted)",
      boxSizing: "border-box"
    }}>
        <TransactionTable rows={[]} sortKey={sortKey} sortDir={sortDir} onSort={key => {
        if (key === sortKey) setSortDir(d => d === "asc" ? "desc" : "asc");else {
          setSortKey(key);
          setSortDir("asc");
        }
      }} searchQuery={searchQuery} setSearchQuery={setSearchQuery} activeCols={activeCols} toggleCol={key => setActiveCols(cols => cols.includes(key) ? cols.filter(k => k !== key) : [...cols, key])} setActiveCols={setActiveCols} />
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Leerzustand: Der Fernkäufer hat in der aktuellen Sitzung noch keine Transaktion getätigt.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortKey, setSortKey] = useState<keyof Transaktion>("uhr");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [searchQuery, setSearchQuery] = useState("Xyz nicht vorhanden");
    const [activeCols, setActiveCols] = useState<(keyof Transaktion)[]>(DEFAULT_VISIBLE_COLS);
    const rows = TRANSAKTIONEN.filter(r => [r.artikel, r.anlieferer, r.uhr].join(" ").toLowerCase().includes(searchQuery.toLowerCase()));
    return <div style={{
      display: "flex",
      height: "100vh",
      padding: 24,
      background: "var(--color-neutral-surface-muted)",
      boxSizing: "border-box"
    }}>
        <TransactionTable rows={rows} sortKey={sortKey} sortDir={sortDir} onSort={key => {
        if (key === sortKey) setSortDir(d => d === "asc" ? "desc" : "asc");else {
          setSortKey(key);
          setSortDir("asc");
        }
      }} searchQuery={searchQuery} setSearchQuery={setSearchQuery} activeCols={activeCols} toggleCol={key => setActiveCols(cols => cols.includes(key) ? cols.filter(k => k !== key) : [...cols, key])} setActiveCols={setActiveCols} />
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Leerzustand: Es gibt Transaktionen, aber die Suche liefert keine Treffer.`,...g.parameters?.docs?.description}}},_=[`Default`,`Empty`,`NoSearchResults`]}))();export{m as Default,h as Empty,g as NoSearchResults,_ as __namedExportsOrder,p as default};