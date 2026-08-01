import{m as o,j as e,b as c,B as l}from"./iframe-b29PHh9x.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const m={title:"Components/Tooltip",component:o,argTypes:{color:{control:"select",options:["contrast","neutral","attention"]}},parameters:{controls:{expanded:!0}},args:{content:"hello world",color:"contrast"}},t={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Hover me"})})},n={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Hover me"})}),args:{disabled:!0}},s={render:r=>e.jsx(o,{open:!0,...r,children:e.jsx(c,{children:"Hover me"})}),args:{color:"neutral"}},a={render:r=>e.jsx(o,{open:!0,...r,content:e.jsx(l,{col:!0,p:!0,children:"Some content"}),children:e.jsx(c,{children:"Hover me"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>,
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip open {...args}>
            <Button>Hover me</Button>
        </Tooltip>,
  args: {
    color: 'neutral'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip open {...args} content={<Box col p>
                    Some content
                </Box>}>
            <Button>Hover me</Button>
        </Tooltip>
}`,...a.parameters?.docs?.source}}};const u=["Default","Disabled","Color","Customized"];export{s as Color,a as Customized,t as Default,n as Disabled,u as __namedExportsOrder,m as default};
