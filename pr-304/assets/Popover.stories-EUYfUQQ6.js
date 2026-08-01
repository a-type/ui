import{j as r,b as t}from"./iframe-CLDG_V9g.js";import{P as e}from"./Popover-Bp_W3DfT.js";import"./preload-helper-Cq-3Hqs1.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const l={title:"Components/Popover",component:e,argTypes:{},parameters:{controls:{expanded:!0}}},o={render(s){return r.jsxs(e,{...s,children:[r.jsx(e.Trigger,{render:r.jsx(t,{color:"primary",size:"small"}),children:"Open Popover"}),r.jsxs(e.Content,{style:{padding:"var(--m-sp-md)"},children:[r.jsx(e.Arrow,{}),r.jsx(e.Title,{children:"Hello"}),r.jsx(e.Description,{children:"This is a popover content."}),r.jsx(e.Close,{})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Popover {...args}>
                <Popover.Trigger render={<Button color="primary" size="small" />}>
                    Open Popover
                </Popover.Trigger>
                <Popover.Content style={{
        padding: 'var(--m-sp-md)'
      }}>
                    <Popover.Arrow />
                    <Popover.Title>Hello</Popover.Title>
                    <Popover.Description>This is a popover content.</Popover.Description>
                    <Popover.Close />
                </Popover.Content>
            </Popover>;
  }
}`,...o.parameters?.docs?.source}}};const m=["Default"];export{o as Default,m as __namedExportsOrder,l as default};
