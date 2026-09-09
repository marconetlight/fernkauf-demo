import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./KonsoleFluid-Cdpf-qy-.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Responsiveness/Konsole`,component:r,parameters:{layout:`fullscreen`,docs:{description:{component:`Die fluide Fassung der Konsole. Zwei Zustaende, mehr braucht es zum Arbeiten
nicht: **Fluid** nach oben offen, **Laptop** als das Maass, ab dem es eng
wird und unter dem alle kleineren Schirme dasselbe Layout bekommen.

Die Hoehe ist ein Browser-Innenmaass, keine Bildschirmhoehe — Tab- und
Adressleiste nehmen rund 90 px. 1440x810 ist der 1440er Schirm abzueglich
dieser Leisten.

Der Umschalter \`anordnung\` gilt in beiden Stories: \`heute\` ist die
Aufstellung der ConsoleShell, \`uhren-links\` stellt die acht Uhren als Spalte
an den linken Rand und ordnet den Rest neu.`}}},argTypes:{showDiagnostics:{control:`boolean`,description:`Groessenanzeige unten und farbiger Rahmen um jedes Panel, dessen Inhalt abgeschnitten wird`},uhrenLaufen:{control:`boolean`,description:`Die Zeiger fallen. Aus heißt: Momentaufnahme wie in mock.ts — dasselbe Bild wie bisher`},taktMs:{control:`inline-radio`,options:[35,70,140,280],description:`Millisekunden je DOT-Position. 35 ist der echte Takt der Anlage (3,5 s je Umlauf), 140 ist ein Viertel davon`},anordnung:{control:`radio`,options:[`heute`,`partien-an-uhr`,`schirm-versteigerung`,`schirm-nebenschirm`],description:`Aufstellung der Panels — dieselben Komponenten, andere Anordnung`},vorgabe:{control:`inline-radio`,options:[`mir`,`fremd`,`zufall`],description:`Wer den Zuschlag bekommt, wenn der Kaufwunsch seinen Zielwert erreicht. Griff der Testleitung: Taste T schaltet zwischen mir und fremd`},zielpreisCent:{control:{type:`number`,min:0,step:1},description:`Vorab hinterlegter Vorstellungspreis in Cent. Liegt beim Start als Kaufwunsch auf der gewählten Uhr — der zweite Kaufweg, mit echter Wartezeit`},quittung:{control:`boolean`,description:`Ob der Kaufwunsch sichtbar quittiert wird. Aus ist doc-treu (die Anlage schickt kein ACK), an ist der Versuch einer Verbesserung. Taste Q schaltet`}},args:{showDiagnostics:!1,anordnung:`heute`,uhrenLaufen:!1,taktMs:140,vorgabe:`mir`,quittung:!1}},o={render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},s={name:`Partien neben ihrer Uhr`,args:{anordnung:`partien-an-uhr`},parameters:{viewport:{defaultViewport:`largeScreen`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},c={name:`Zwei Schirme · 1 Versteigerung`,args:{anordnung:`schirm-versteigerung`},parameters:{viewport:{defaultViewport:`largeScreen`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},l={name:`Zwei Schirme · 2 Nebenschirm`,args:{anordnung:`schirm-nebenschirm`},parameters:{viewport:{defaultViewport:`largeScreen`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},u={name:`Kaufmoment (langsam, zum Testen)`,args:{uhrenLaufen:!0,taktMs:280,anordnung:`schirm-versteigerung`,vorgabe:`mir`,quittung:!1},parameters:{viewport:{defaultViewport:`largeScreen`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},d={name:`Hinterlegter Preis (wartet, löst selbst aus)`,args:{uhrenLaufen:!0,taktMs:140,anordnung:`schirm-versteigerung`,vorgabe:`mir`,quittung:!1,zielpreisCent:300},parameters:{viewport:{defaultViewport:`largeScreen`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},f={name:`Laptop (1440×810)`,parameters:{viewport:{defaultViewport:`laptop`}},render:e=>(0,i.jsx)(`div`,{style:{width:1440,height:810},children:(0,i.jsx)(r,{...e})})},p={name:`Live-Prototyp (Uhren laufen, Reiter klickbar)`,args:{uhrenLaufen:!0,taktMs:140,anordnung:`schirm-versteigerung`},parameters:{viewport:{defaultViewport:`largeScreen`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100vw`,height:`100vh`},children:(0,i.jsx)(r,{...e})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...o.parameters?.docs?.source},description:{story:`Fuellt das Canvas — zieh den Storybook-Rahmen und beobachte, was umfliesst
und was abgeschnitten wird. Die Story zum Arbeiten, nicht zum Abnehmen.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Partien neben ihrer Uhr",
  args: {
    anordnung: "partien-an-uhr"
  },
  parameters: {
    viewport: {
      defaultViewport: "largeScreen"
    }
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...s.parameters?.docs?.source},description:{story:`Jede Uhr steht neben ihren eigenen Partien. Die Zuordnung liegt damit in der
Position statt in einer Zahl — die Spalte UHR faellt weg, und die eigene
Ueberschrift der Nachfolgenden Partien ebenfalls, weil sie acht Gruppen
ueberschreiben wuerde, die sie nicht mehr zusammenhaelt.

Ein Versuch. Ob die Kopplung mehr bringt als die durchgehende Tabelle,
entscheidet sich am Bild, nicht am Code.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Zwei Schirme · 1 Versteigerung",
  args: {
    anordnung: "schirm-versteigerung"
  },
  parameters: {
    viewport: {
      defaultViewport: "largeScreen"
    }
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:`Zwei Schirme, Schirm 1: die Versteigerung.

Nur was zum laufenden Aufruf gehoert: die aktuelle Partie, ihre Uhr und die
Nebenuhren, alle drei ueber die volle Hoehe. Nachfolgende Partien und
Transaktionen sind auf Schirm 2 gezogen.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Zwei Schirme · 2 Nebenschirm",
  args: {
    anordnung: "schirm-nebenschirm"
  },
  parameters: {
    viewport: {
      defaultViewport: "largeScreen"
    }
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Zwei Schirme, Schirm 2: der Nebenschirm.

Nachfolgende Partien links, Transaktionen rechts, je eine Haelfte der Breite
— das Naechste und das Gewesene wiegen hier gleich viel. Beide Tabellen
bekommen die volle Hoehe.

Ohne Kopfzeile: Reiter, Kauftastensperre und Verbindungsanzeige gehoeren zu
der Konsole, an der bedient wird.

Die Transaktionen laufen hier in ihrer fuellenden Fassung — alle Zeilen statt
der letzten drei, der Koerper scrollt. Auf der halben Seite stehen sonst drei
Zeilen in einer Karte, die Platz fuer dreissig hat.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Kaufmoment (langsam, zum Testen)",
  args: {
    uhrenLaufen: true,
    taktMs: 280,
    anordnung: "schirm-versteigerung",
    vorgabe: "mir",
    quittung: false
  },
  parameters: {
    viewport: {
      defaultViewport: "largeScreen"
    }
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Der Kaufmoment, allein.

Dieselbe Konsole wie im Live-Prototyp, aber langsam: 280 ms je Punkt, also
28 Sekunden für einen Umlauf. Wer zum ersten Mal auf eine Uhr sieht,
braucht diese Zeit, um Zeiger, Preis und Rundenzahl auseinanderzuhalten,
bevor er drücken soll.

Für die Testleitung sind das drei Aufgaben in einer Story, und zwischen
ihnen wird nur eine Taste gedrückt:

1. **„Kauf diese Partie bei etwa 0,30 €."** So wie sie steht — Zuschlag an
   den Teilnehmer. Die Frage danach: woran hast du gemerkt, dass sie deine
   ist? Wann warst du sicher?
2. **\`T\`, dann dieselbe Aufgabe.** Die Tribüne kommt zwei Punkte früher.
   Die Frage danach: was ist passiert? (Wer hier „mein Druck kam nicht an"
   sagt, hat einen Befund geliefert, keinen Fehler gemacht.)
3. **\`Q\`, dann dieselbe Aufgabe.** Jetzt quittiert der Schirm den
   Kaufwunsch sofort. Die Frage danach: hat das etwas geändert?

Und einmal gar nicht drücken — dann läuft die Uhr auf den Mindestpreis und
die Partie bleibt unverkauft. Das ist der dritte Ausgang, und ihn hat noch
niemand erklärt bekommen.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Hinterlegter Preis (wartet, löst selbst aus)",
  args: {
    uhrenLaufen: true,
    taktMs: 140,
    anordnung: "schirm-versteigerung",
    vorgabe: "mir",
    quittung: false,
    zielpreisCent: 300
  },
  parameters: {
    viewport: {
      defaultViewport: "largeScreen"
    }
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Der zweite Kaufweg: der Preis liegt schon, der Käufer wartet.

Hier drückt niemand. 300 Cent sind auf Uhr 5 (Münzwert 10 ct) der Uhrwert
30, und die Uhr startet bei 52 — es liegt also ein gutes Drittel Umlauf
dazwischen. In der Zeit steht auf dem Schirm: die Teal-Marke im Ring an der
Stelle des eigenen Preises, der fallende Preis in der Mitte, und sonst
nichts. Keine Bestätigung, dass der Preis überhaupt liegt.

Fragen für diese Aufgabe, ohne Vorrede an den Teilnehmer:

- „Du hast auf diese Partie 3,00 € hinterlegt. Was passiert jetzt?"
- „Woran siehst du, dass der Preis liegt?" (Die Marke im Ring ist die
  einzige Stelle. Wer sie nicht findet, hat einen Befund geliefert.)
- „Kannst du ihn noch zurücknehmen?" (Nein — und das steht nirgends.)

Wenn die Uhr durchläuft, löst der Kaufwunsch von selbst aus: Zuschlag,
Bestätigungszeichen, laufender Pegel, Zeile in den Transaktionen. Ohne dass
der Teilnehmer etwas getan hat. Auch das ist eine Frage: hat er gemerkt,
dass es seiner war?

Der Takt steht auf 140, nicht 280 — die Wartezeit soll spürbar sein, aber
eine Sitzung hat nicht für jeden Umlauf eine halbe Minute.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Laptop (1440×810)",
  parameters: {
    viewport: {
      defaultViewport: "laptop"
    }
  },
  render: args => <div style={{
    width: 1440,
    height: 810
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Das untere Maass. Was hier sitzt, gilt fuer alle kleineren Schirme.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Live-Prototyp (Uhren laufen, Reiter klickbar)",
  args: {
    uhrenLaufen: true,
    taktMs: 140,
    anordnung: "schirm-versteigerung"
  },
  parameters: {
    viewport: {
      defaultViewport: "largeScreen"
    }
  },
  render: args => <div style={{
    width: "100vw",
    height: "100vh"
  }}>
      <KonsoleFluid {...args} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Der Prototyp zum Vorführen: Uhren laufen, Reiter führen irgendwohin.

**Was sich bewegt.** Alle acht Zeiger fallen. Der Preis fällt mit ihnen —
\`Preis = DOT-Position × Münzwert\`, so wie in der Anlage. Am Mindestwert
setzt die Uhr neu aus und die Rundenzahl wächst.

Der echte Takt ist 35 ms je Punkt, also 3,5 Sekunden für einen Umlauf. Die
Vorgabe läuft auf 140 ms, weil das echte Tempo für jemanden, der die Uhr
zum ersten Mal sieht, nicht zu lesen ist. \`taktMs\` in den Controls schaltet
durch 35, 70, 140 und 280 — in einer Sitzung kann man hochdrehen, sobald
jemand sattelfest ist.

**Was klickbar ist.** Katalog, Transaktionen, Nutzerkonto und Handelsportal
liegen hinter ihren Reitern, das Fragezeichen führt in Hilfe & Support. Die
Uhren laufen dabei weiter — wer aus dem Katalog zurückkommt, findet andere
Preise vor.

**Was es seit dem 08.09.2026 gibt: den Kauf.** Leertaste oder Klick auf die
Fußzeile der Uhr sendet einen Kaufwunsch auf den Preis, der in dem Moment
im Ring steht. Danach passiert nichts — so wie in der Anlage, die keine
Bestätigung zurückschickt. Erreicht die Uhr den Zielwert, steht der Ausgang
da: Zuschlag an mich mit Bestätigungszeichen, laufendem Sprechpegel und
einer Zeile in den Transaktionen; Zuschlag an eine fremde Karte; oder
Mindestpreis erreicht und unverkauft. Zweieinhalb Sekunden später rückt die
nächste Partie auf — dieselbe, die vorher unter „Nachfolgende Partien"
stand.

Die Kauftastensperre schaltet weiter nur ihre Anzeige — der Druck geht aber
nicht mehr raus, und dass ein Teilnehmer bei gesperrter Taste drückt, steht
in der Mitschrift.

**Griffe für die Testleitung.** Leertaste kauft, \`T\` gibt den nächsten
Zuschlag der Tribüne, \`Q\` schaltet die Quittung, \`V\` die Verbindung.

**Was es weiter nicht gibt.** Keine Mengentaste, kein Vorstellungspreis, der
von selbst auslöst, keine Uhrenwahl per F1–F8.`,...p.parameters?.docs?.description}}},m=[`Fluid`,`PartienAnUhr`,`SchirmVersteigerung`,`SchirmNebenschirm`,`Kaufmoment`,`HinterlegterPreis`,`Laptop`,`LivePrototyp`]}))();export{o as Fluid,d as HinterlegterPreis,u as Kaufmoment,f as Laptop,p as LivePrototyp,s as PartienAnUhr,l as SchirmNebenschirm,c as SchirmVersteigerung,m as __namedExportsOrder,a as default};