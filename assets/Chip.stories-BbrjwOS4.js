import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./cn-CHNBg8JS.js";function i({label:e,value:t,highlight:n,className:i}){return(0,a.jsxs)(`div`,{className:r(`inline-flex flex-col items-start rounded-lg px-2 py-1.5 gap-0.5 transition-colors`,n?`bg-primary-success`:`bg-neutral-border-default`,i),children:[(0,a.jsx)(`span`,{className:`font-sans text-[9px] uppercase tracking-[0.08em] text-neutral-primary leading-none`,children:e}),(0,a.jsx)(`span`,{className:`font-sans text-[14px] font-semibold text-neutral-primary leading-none`,children:t})]})}var a,o=e((()=>{n(),a=t(),i.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},highlight:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l,u,d;e((()=>{o(),s=t(),c={title:`Components/Chip`,component:i,parameters:{layout:`centered`},args:{label:`GES-EH`,value:`20`,highlight:!1}},l={},u={name:`All variants`,render:()=>(0,s.jsxs)(`div`,{className:`flex gap-3 p-6 bg-[var(--color-neutral-border-subtle)] rounded-xl`,children:[(0,s.jsx)(i,{label:`RUNDEN`,value:`0`}),(0,s.jsx)(i,{label:`MÜNZE`,value:`10`}),(0,s.jsx)(i,{label:`LT`,value:`—`}),(0,s.jsx)(i,{label:`GES-EH`,value:`20`}),(0,s.jsx)(i,{label:`INHALT`,value:`6`}),(0,s.jsx)(i,{label:`ABN-EH`,value:`3`,highlight:!0})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`Small data display used throughout the console panels.
Shows a labelled mono value — not interactive.

Use \`highlight\` to draw attention to a field that has changed
or requires the user's focus, e.g. ABN-EH when a buyer is set.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex gap-3 p-6 bg-[var(--color-neutral-border-subtle)] rounded-xl">
      <Chip label="RUNDEN" value="0" />
      <Chip label="MÜNZE" value="10" />
      <Chip label="LT" value="—" />
      <Chip label="GES-EH" value="20" />
      <Chip label="INHALT" value="6" />
      <Chip label="ABN-EH" value="3" highlight />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`AllVariants`]}))();export{u as AllVariants,l as Default,d as __namedExportsOrder,c as default};