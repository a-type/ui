import{j as e,B as c,b as d,I as p}from"./iframe-b29PHh9x.js";import{I as o}from"./Input-CFTk5cTc.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Input.module-C9Yg6vyE.js";const x={title:"Components/Input",component:o,argTypes:{disabled:{control:"boolean"}},parameters:{controls:{expanded:!0}}},s={},t={render:r=>e.jsxs(c,{gap:!0,items:"center",children:[e.jsx(o,{placeholder:"Type something...",...r}),e.jsx(d,{children:"Submit"})]})},n={render:r=>e.jsxs(o.Border,{children:[e.jsx(p,{name:"search"}),e.jsx(o.Input,{placeholder:"Search...",...r}),e.jsx(d,{emphasis:"ghost",children:e.jsx(p,{name:"arrowRight"})})]})},a={render:r=>e.jsx(c,{p:!0,border:!0,rounded:!0,children:e.jsx(c,{p:!0,border:!0,rounded:!0,children:e.jsx(o,{placeholder:"Type something...",...r})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Box gap items="center">
            <Input placeholder="Type something..." {...args} />
            <Button>Submit</Button>
        </Box>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Input.Border>
            <Icon name="search" />
            <Input.Input placeholder="Search..." {...args} />
            <Button emphasis="ghost">
                <Icon name="arrowRight" />
            </Button>
        </Input.Border>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Box p border rounded>
            <Box p border rounded>
                <Input placeholder="Type something..." {...args} />
            </Box>
        </Box>
}`,...a.parameters?.docs?.source}}};const g=["Default","ButtonAndInput","WithAccessories","NestedInBoxes"];export{t as ButtonAndInput,s as Default,a as NestedInBoxes,n as WithAccessories,g as __namedExportsOrder,x as default};
