import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BD_EiCn8.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{c as i,l as a,o,s}from"./ActiveClockPanel-KlMFxD9r.js";import{n as c,t as l}from"./KonsoleFluid-Cdpf-qy-.js";function u(e){let t=new URLSearchParams(e),n=(t.get(`folge`)??`heute`).split(`,`).map(e=>e.trim()).map(e=>v[e]??(y.includes(e)?e:null)).filter(e=>e!==null),r=Number(t.get(`takt`)),i=t.get(`vorgabe`),a=Number(t.get(`zielpreis`));return{teilnehmer:t.get(`tn`)??``,folge:n.length>0?n:[`heute`],taktMs:[35,70,140,280].includes(r)?r:140,uhrenLaufen:t.get(`lauf`)!==`0`,vorgabe:i===`fremd`||i===`zufall`?i:`mir`,quittung:t.get(`quittung`)===`1`,...Number.isFinite(a)&&a>0?{zielpreisCent:a}:{},diagnostics:t.get(`diag`)===`1`}}function d(){let[e,t]=(0,g.useState)({breite:window.innerWidth,hoehe:window.innerHeight});return(0,g.useEffect)(()=>{let e=()=>t({breite:window.innerWidth,hoehe:window.innerHeight});return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),e}function f({mass:e,teilnehmer:t,aufStart:n}){let r=e.breite<x.breite||e.hoehe<x.hoehe,i=typeof document.documentElement.requestFullscreen==`function`;return(0,_.jsx)(`div`,{className:`flex items-center justify-center w-full h-full bg-neutral-border-subtle p-6`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-6 w-full max-w-[520px] rounded-[12px] bg-neutral-surface p-8`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`span`,{className:`type-label-sm text-neutral-primary`,children:[`Fernkauf `,t?`· ${t}`:``]}),(0,_.jsx)(`span`,{className:`type-body-lg-strong text-neutral-primary`,children:`Gleich sehen Sie die Konsole, so wie sie im Verkauf aussehen würde.`}),(0,_.jsx)(`span`,{className:`type-body-base text-neutral-secondary`,children:`Die Uhren laufen. Sagen Sie einfach laut, was Sie sehen und was Sie tun würden — es gibt nichts falsch zu machen, wir testen den Bildschirm, nicht Sie.`})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-[8px] bg-neutral-surface-muted p-4`,children:[(0,_.jsxs)(`div`,{className:`flex items-baseline justify-between`,children:[(0,_.jsx)(`span`,{className:`type-label-sm text-neutral-primary`,children:`Fenster`}),(0,_.jsxs)(`span`,{className:`type-numeric-md tabular-nums text-neutral-primary`,children:[e.breite,` × `,e.hoehe]})]}),r?(0,_.jsxs)(`span`,{className:`type-body-sm`,style:{color:`var(--color-status-error)`},children:[`Kleiner als das Maß, für das die Konsole entworfen ist (`,x.breite,` × `,x.hoehe,`). Es geht trotzdem — bitte nur sagen, wenn etwas abgeschnitten wirkt.`]}):(0,_.jsx)(`span`,{className:`type-body-sm text-neutral-secondary`,children:`Passt zum entworfenen Maß.`})]}),(0,_.jsxs)(`div`,{className:`flex flex-row items-center gap-3`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:n,className:`type-body-base-strong`,style:{height:40,padding:`0 24px`,border:`none`,borderRadius:100,background:`var(--color-primary-default)`,color:`var(--color-neutral-surface)`,cursor:`pointer`},children:`Los`}),i&&(0,_.jsx)(`button`,{type:`button`,onClick:()=>void document.documentElement.requestFullscreen?.(),className:`type-body-base`,style:{height:40,padding:`0 16px`,borderRadius:100,background:`transparent`,border:`1px solid var(--color-neutral-border-default)`,color:`var(--color-neutral-primary)`,cursor:`pointer`},children:`Vollbild`})]})]})})}function p({stelle:e,folge:t,zeilen:n,aufDatei:r,aufWeiter:i,aufZurueck:a}){return(0,_.jsxs)(`div`,{className:`absolute inset-x-0 top-0 z-50 flex items-center gap-4 h-8 px-3 font-[family-name:var(--font-family-sans)] text-[11px] text-white`,style:{background:`color-mix(in srgb, var(--color-neutral-primary) 92%, transparent)`},children:[(0,_.jsxs)(`span`,{className:`font-bold tabular-nums`,children:[e+1,`/`,t.length]}),(0,_.jsx)(`span`,{children:b[t[e]]}),(0,_.jsx)(`button`,{type:`button`,onClick:a,className:`underline cursor-pointer`,children:`P zurück`}),(0,_.jsx)(`button`,{type:`button`,onClick:i,className:`underline cursor-pointer`,children:`N weiter`}),(0,_.jsxs)(`span`,{className:`ml-auto tabular-nums opacity-70`,children:[n,` Zeilen`]}),(0,_.jsx)(`button`,{type:`button`,onClick:r,className:`underline cursor-pointer`,children:`Mitschrift laden`})]})}function m({e}){let t=a(),n=d(),[r,i]=(0,g.useState)(0),[o,c]=(0,g.useState)(!1),u=e.folge[Math.min(r,e.folge.length-1)],f=(0,g.useRef)(!1);(0,g.useEffect)(()=>{f.current||(f.current=!0,t.notieren(`start`,{fenster:n,anordnung:u,taktMs:e.taktMs,vorgabe:e.vorgabe,quittung:e.quittung,...e.zielpreisCent===void 0?{}:{zielpreisCent:e.zielpreisCent}}))},[t,n,u,e]);let m=(0,g.useRef)(n);(0,g.useEffect)(()=>{if(n.breite===m.current.breite&&n.hoehe===m.current.hoehe)return;let e=window.setTimeout(()=>{m.current=n,t.notieren(`fenster`,{fenster:n})},500);return()=>window.clearTimeout(e)},[n,t]);let h=(0,g.useCallback)(n=>{i(r=>{let i=Math.min(Math.max(r+n,0),e.folge.length-1);return i!==r&&t.notieren(`anordnung`,{anordnung:e.folge[i],stelle:i+1,von:e.folge[r]}),i})},[e.folge,t]);(0,g.useEffect)(()=>{function e(e){let t=document.activeElement?.tagName;if(t===`INPUT`||t===`TEXTAREA`||t===`SELECT`)return;let n=e.key.toLowerCase();n===`n`&&h(1),n===`p`&&h(-1),n===`m`&&c(e=>!e)}return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h]);let v=(0,g.useCallback)(()=>{let r=s(t.eintraege,{teilnehmer:e.teilnehmer||null,folge:e.folge,taktMs:e.taktMs,vorgabe:e.vorgabe,quittung:e.quittung,zielpreisCent:e.zielpreisCent??null,fensterZuletzt:n,schirm:{breite:window.screen.width,hoehe:window.screen.height},geraet:navigator.userAgent,erzeugt:new Date().toISOString()}),i=URL.createObjectURL(new Blob([r],{type:`application/json`})),a=document.createElement(`a`);a.href=i,a.download=`fernkauf-mitschrift-${e.teilnehmer||`ohne-kennung`}.json`,a.click(),URL.revokeObjectURL(i)},[t.eintraege,e,n]);return(0,_.jsxs)(`div`,{className:`relative w-full h-full`,children:[(0,_.jsx)(l,{anordnung:u,uhrenLaufen:e.uhrenLaufen,taktMs:e.taktMs,vorgabe:e.vorgabe,quittung:e.quittung,zielpreisCent:e.zielpreisCent,showDiagnostics:e.diagnostics}),o&&(0,_.jsx)(p,{stelle:Math.min(r,e.folge.length-1),folge:e.folge,zeilen:t.eintraege.length,aufDatei:v,aufWeiter:()=>h(1),aufZurueck:()=>h(-1)})]})}function h({suche:e}){let t=(0,g.useMemo)(()=>u(e??window.location.search),[e]),n=d(),[r,i]=(0,g.useState)(!1);return r?(0,_.jsx)(o,{children:(0,_.jsx)(m,{e:t})}):(0,_.jsx)(f,{mass:n,teilnehmer:t.teilnehmer,aufStart:()=>i(!0)})}var g,_,v,y,b,x,S=e((()=>{g=t(n(),1),i(),c(),_=r(),v={1:`heute`,2:`partien-an-uhr`,3:`schirm-versteigerung`,4:`schirm-nebenschirm`},y=[`heute`,`partien-an-uhr`,`schirm-versteigerung`,`schirm-nebenschirm`],b={heute:`Heute`,"partien-an-uhr":`Partien neben ihrer Uhr`,"schirm-versteigerung":`Zwei Schirme · 1 Versteigerung`,"schirm-nebenschirm":`Zwei Schirme · 2 Nebenschirm`},x={breite:1440,hoehe:810},h.__docgenInfo={description:``,methods:[],displayName:`Testlauf`,props:{suche:{required:!1,tsType:{name:`string`},description:``}}}})),C,w,T,E,D,O;e((()=>{S(),C=r(),w={title:`Testlauf/Sitzung`,component:h,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`largeScreen`},docs:{description:{component:`Die Konsole für eine Testsitzung, gestellt über die Adresse.

Diese Stories sind für die Testleitung, nicht für den Teilnehmer — der
bekommt einen Link auf \`?test=1&…\`. Hier lässt sich prüfen, ob ein Link so
aussieht, wie er soll, bevor er verschickt wird: \`suche\` ist genau der Teil
der Adresse ab dem Fragezeichen.

Die Felder stehen im Kopf von \`Testlauf.tsx\`.`}}},argTypes:{suche:{control:`text`,description:`Der Teil der Adresse ab dem Fragezeichen — genau so, wie er im Link steht`}}},T={name:`Startkarte`,args:{suche:`?test=1&tn=04&folge=3,1,4,2&takt=140`},render:e=>(0,C.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,C.jsx)(h,{...e})})},E={name:`Sitzung (Link für Teilnehmer 04)`,args:{suche:`?test=1&tn=04&folge=3,1,4,2&takt=140&vorgabe=mir`},render:e=>(0,C.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,C.jsx)(h,{...e})})},D={name:`Sitzung mit hinterlegtem Preis`,args:{suche:`?test=1&tn=04&folge=3&takt=140&zielpreis=300`},render:e=>(0,C.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,C.jsx)(h,{...e})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Startkarte",
  args: {
    suche: "?test=1&tn=04&folge=3,1,4,2&takt=140"
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <Testlauf {...args} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Was der Teilnehmer zuerst sieht: zwei Sätze, das gemessene Fenstermaß, und
zwei Knöpfe. Nichts über die Uhr — wer erklärt bekommt, wie sie
funktioniert, kann nachher nicht mehr sagen, ob er sie verstanden hätte.

Im Storybook-Rahmen steht hier das Maß des Vorschaufelds, nicht des
Fensters. Beim Teilnehmer im eigenen Tab ist es sein Fenster.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Sitzung (Link für Teilnehmer 04)",
  args: {
    suche: "?test=1&tn=04&folge=3,1,4,2&takt=140&vorgabe=mir"
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <Testlauf {...args} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Ein vollständiger Link, wie er an einen Teilnehmer geht.

Teilnehmer 04 bekommt die vier Anordnungen in der Reihenfolge 3, 1, 4, 2.
Die Reihenfolge dreht je Teilnehmer durch — sonst steht die zuerst gezeigte
Anordnung immer im Vorteil, weil an ihr das Verstehen passiert und an den
folgenden nur noch das Wiedererkennen. Vier Teilnehmer, vier Startpunkte:

    tn=01  folge=1,2,3,4
    tn=02  folge=2,3,4,1
    tn=03  folge=3,4,1,2
    tn=04  folge=4,1,2,3

Bei acht Teilnehmern läuft dieselbe Liste zweimal.

Weiter mit \`N\`, zurück mit \`P\`, die Leiste der Testleitung mit \`M\`. Die
Uhren laufen über den Wechsel hinweg weiter — die vier Anordnungen sollen
sich an derselben Ware vergleichen lassen.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Sitzung mit hinterlegtem Preis",
  args: {
    suche: "?test=1&tn=04&folge=3&takt=140&zielpreis=300"
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <Testlauf {...args} />
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Die zweite Runde derselben Sitzung: hinterlegter Preis statt Tastendruck.

\`zielpreis=300\` legt 3,00 € auf die laufende Partie. Der Teilnehmer drückt
nicht, er wartet — und die einzige Stelle, an der der Preis sichtbar ist,
ist die Teal-Marke im Uhrring.`,...D.parameters?.docs?.description}}},O=[`Start`,`Sitzung`,`MitHinterlegtemPreis`]}))();export{D as MitHinterlegtemPreis,E as Sitzung,T as Start,O as __namedExportsOrder,w as default};