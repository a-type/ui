import{j as e,B as t,b as c}from"./iframe-CLDG_V9g.js";import{C as s}from"./Chip-CJSAOqgM.js";import"./preload-helper-Cq-3Hqs1.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const d={title:"Components/Chip",component:s,args:{children:"Chip",emphasis:"default"},parameters:{controls:{expanded:!0}}},r={render(o){return e.jsx(s,{...o})}},a={render(){return e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(s,{className:"@mode-neutral",children:"Gray"}),e.jsx(s,{children:"Primary"}),e.jsx(s,{className:"@mode-accent",children:"Accent"}),e.jsx(s,{className:"@mode-attention",children:"Attention"}),e.jsx(s,{className:"@mode-success",children:"Success"}),e.jsx(s,{className:"@mode-lemon",children:"Lemon"}),e.jsx(s,{className:"@mode-leek",children:"Leek"}),e.jsx(s,{className:"@mode-tomato",children:"Tomato"}),e.jsx(s,{className:"@mode-blueberry",children:"Blueberry"}),e.jsx(s,{className:"@mode-eggplant",children:"Eggplant"})]})}},n={render(o){return e.jsxs(t,{gap:!0,items:"center",children:[e.jsx(s,{render:e.jsx(c,{}),emphasis:"primary",children:"Clickable Chip"}),e.jsx(s,{...o,children:"Non-clickable Chip"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Chip {...args} />;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render() {
    return <div style={{
      display: 'flex',
      gap: '12px'
    }}>
                <Chip className="@mode-neutral">Gray</Chip>
                <Chip>Primary</Chip>
                <Chip className="@mode-accent">Accent</Chip>
                <Chip className="@mode-attention">Attention</Chip>
                <Chip className="@mode-success">Success</Chip>
                <Chip className="@mode-lemon">Lemon</Chip>
                <Chip className="@mode-leek">Leek</Chip>
                <Chip className="@mode-tomato">Tomato</Chip>
                <Chip className="@mode-blueberry">Blueberry</Chip>
                <Chip className="@mode-eggplant">Eggplant</Chip>
            </div>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box gap items="center">
                <Chip render={<Button />} emphasis="primary">
                    Clickable Chip
                </Chip>
                <Chip {...args}>Non-clickable Chip</Chip>
            </Box>;
  }
}`,...n.parameters?.docs?.source}}};const h=["Default","Colors","AsButton"];export{n as AsButton,a as Colors,r as Default,h as __namedExportsOrder,d as default};
