import{I as o,j as r,B as s}from"./iframe-5VeFnoCW.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const n=["placeholder","dots","globe","cart","fridge","book","flag","locate","tag","scan","filter","add_note","drag_vertical","note","food","magic","convert","offline","profile","add_person","gift","add_to_list","check","snowflake","clock","plus","x","refresh","new_window","warning","upload","download","undo","redo","grabby","copy","maximize","email","link","linkRemove","camera","calendar","page","gear","lock","lockOpen","send","pencil","eye","eyeClosed","stopwatch","zoomIn","zoomOut","picture","arrowLeft","arrowRight","arrowUp","arrowDown","info","cardsGrid","cardsMixed","cardsRows","location","waterDrop","chevron","refreshDisabled","cloud","cloudDisabled","trash","notAllowed","connection","connectionBreak","connectionSplit","search","star","bell","bell-off","home","thermometer","lightbulb","next","playPause","pause","previous","skipStart","skipEnd","enterKey","gamePiece","share","italic","bold","capitalization","underline","textAlignLeft","textAlignRight","textAlignCenter","textJustify","menu","paragraph","highlight","pushLeft","pushRight","pushUp","pushDown","bulletList","orderedList","quote","code","newPage","bug","smile","phone","sun","moon","suitSpade","suitClub","suitDiamond","suitHeart","chat","minus","plus","flame","angles","magnet","boxSelect","hand","pin","pinFilled"],p={title:"Components/Icon",component:o,argTypes:{name:{control:{type:"select",options:n}}},args:{name:"placeholder"},parameters:{controls:{expanded:!0}}},t={render(e){return r.jsx(o,{...e})}},a={render(){return r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"var(--m-sp-xs)"},children:n.map(e=>r.jsxs(s,{surface:"ambient",col:!0,p:"sm",layout:"center center",border:!0,children:[r.jsx(o,{name:e,size:25}),r.jsx("span",{style:{textAlign:"center",fontSize:"var(--m-prose-ambient-size)"},children:e})]},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Icon {...args} />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render() {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 'var(--m-sp-xs)'
    }}>
                {iconNames.map(name => <Box surface="ambient" col p="sm" layout="center center" border key={name}>
                        <Icon name={name} size={25} />
                        <span style={{
          textAlign: 'center',
          fontSize: 'var(--m-prose-ambient-size)'
        }}>
                            {name}
                        </span>
                    </Box>)}
            </div>;
  }
}`,...a.parameters?.docs?.source}}};const d=["Default","All"];export{a as All,t as Default,d as __namedExportsOrder,p as default};
