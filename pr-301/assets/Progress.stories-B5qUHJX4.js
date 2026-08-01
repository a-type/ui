import{j as e,B as t}from"./iframe-BTd0T825.js";import{P as a}from"./Progress-TDcxe1hw.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./valueToPercent-WVG-g_BQ.js";import"./stringifyLocale-BMPUsiav.js";import"./useRegisteredLabelId-D_dWLzUA.js";const c={title:"Components/Progress",component:a,argTypes:{},parameters:{controls:{expanded:!0}}},s={render(r){return e.jsxs(t,{col:!0,gap:!0,children:[e.jsx(a,{...r,value:50,max:100}),e.jsx(a,{...r,value:100,max:100}),e.jsx(a,{...r,value:0,max:100})]})}},o={render(r){return e.jsxs(t,{col:!0,gap:!0,children:[e.jsx(a.Labeled,{...r,value:33,max:100,label:"Loading..."}),e.jsx(a.Labeled,{...r,value:100,max:100,label:"Complete"}),e.jsx(a.Labeled,{...r,value:0,max:100,label:"Starting..."})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap>
                <Progress {...args} value={50} max={100} />
                <Progress {...args} value={100} max={100} />
                <Progress {...args} value={0} max={100} />
            </Box>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap>
                <Progress.Labeled {...args} value={33} max={100} label="Loading..." />
                <Progress.Labeled {...args} value={100} max={100} label="Complete" />
                <Progress.Labeled {...args} value={0} max={100} label="Starting..." />
            </Box>;
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","Labeled"];export{s as Default,o as Labeled,g as __namedExportsOrder,c as default};
