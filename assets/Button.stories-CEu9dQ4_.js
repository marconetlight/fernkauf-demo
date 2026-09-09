import{i as e,n as t,t as n}from"./preload-helper-BdFrVu1K.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{n as i,t as a}from"./cn-CHNBg8JS.js";function o({variant:e=`primary`,size:t=`md`,icon:n,iconAfter:r,children:i,className:o,disabled:u,...d}){return(0,s.jsxs)(`button`,{type:`button`,disabled:u,className:a(`inline-flex items-center justify-center font-sans font-medium border transition-colors cursor-pointer whitespace-nowrap select-none`,`disabled:opacity-40 disabled:cursor-not-allowed`,c[e],l[t],o),...d,children:[n&&(0,s.jsx)(`span`,{className:`shrink-0 flex items-center`,children:n}),i,r&&(0,s.jsx)(`span`,{className:`shrink-0 flex items-center`,children:r})]})}var s,c,l,u=e((()=>{i(),s=r(),c={primary:`bg-primary-default text-neutral-surface hover:opacity-90 border-transparent`,secondary:`bg-transparent text-neutral-primary border-neutral-border-default hover:border-primary-default hover:text-primary-default`,ghost:`bg-transparent text-neutral-primary border-transparent hover:bg-neutral-border-subtle`,danger:`bg-error text-neutral-surface hover:opacity-90 border-transparent`},l={sm:`text-[11px] px-3 py-1.5 rounded-md gap-1.5 h-7`,md:`text-[13px] px-4 py-2   rounded-lg gap-2   h-9`,lg:`text-[15px] px-5 py-2.5 rounded-xl gap-2.5 h-11`},o.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"primary" | "secondary" | "ghost" | "danger"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"ghost"`},{name:`literal`,value:`"danger"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:``},iconAfter:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`ButtonHTMLAttributes`]}})),d,f,p,m,h,g;e((()=>{u(),d=r(),t(),f={title:`Components/Button`,component:o,parameters:{layout:`centered`},args:{children:`Button`,variant:`primary`,size:`md`}},p={},m={args:{children:`Kaufen`,variant:`primary`},play:async({canvas:e})=>{let{expect:t}=await n(async()=>{let{expect:e}=await import(__STORYBOOK_MODULE_TEST__);return{expect:e}},[],import.meta.url),r=e.getByRole(`button`,{name:/kaufen/i});await t(getComputedStyle(r).backgroundColor).toBe(`rgb(30, 137, 126)`)}},h={name:`All variants`,render:()=>(0,d.jsx)(`div`,{className:`flex flex-col gap-6 p-6 bg-neutral-surface-muted rounded-xl`,children:[`primary`,`secondary`,`ghost`,`danger`].map(e=>(0,d.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,d.jsx)(`span`,{className:`font-sans text-[11px] text-neutral-primary w-20`,children:e}),[`sm`,`md`,`lg`].map(t=>(0,d.jsx)(o,{variant:e,size:t,children:t},t)),(0,d.jsx)(o,{variant:e,disabled:!0,children:`disabled`})]},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`Use the controls panel to explore all combinations of variant, size, and state.

- **primary** — single most important action on a screen; use sparingly
- **secondary** — supporting action alongside a primary, e.g. "Abbrechen"
- **ghost** — low-emphasis; for tertiary actions or dense UI areas like table rows
- **danger** — destructive actions only; always pair with a confirmation step`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Kaufen",
    variant: "primary"
  },
  play: async ({
    canvas
  }) => {
    const {
      expect
    } = await import("storybook/test");
    const btn = canvas.getByRole("button", {
      name: /kaufen/i
    });
    await expect(getComputedStyle(btn).backgroundColor).toBe("rgb(30, 137, 126)");
  }
}`,...m.parameters?.docs?.source},description:{story:"CSS smoke check — asserts the global stylesheet actually loaded.\nButton `primary` uses `bg-primary-default` → resolves to rgb(30, 137, 126).\nIf this story fails, `index.css` was not loaded in the preview.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex flex-col gap-6 p-6 bg-neutral-surface-muted rounded-xl">
      {(["primary", "secondary", "ghost", "danger"] as const).map(v => <div key={v} className="flex items-center gap-4">
          <span className="font-sans text-[11px] text-neutral-primary w-20">{v}</span>
          {(["sm", "md", "lg"] as const).map(s => <Button key={s} variant={v} size={s}>{s}</Button>)}
          <Button variant={v} disabled>disabled</Button>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`CssCheck`,`AllVariants`]}))();export{h as AllVariants,m as CssCheck,p as Default,g as __namedExportsOrder,f as default};