import{j as r,B as a}from"./iframe-5VeFnoCW.js";import{T as t}from"./skeletons-mKIcpQxu.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const p={title:"Components/TextSkeleton",component:t,argTypes:{maxLength:{control:{type:"number"},description:"Maximum length of the random skeleton text"}},args:{maxLength:20},parameters:{controls:{expanded:!0}}},o={render(e){return r.jsx(t,{...e})}},n={render(e){return r.jsxs(a,{col:!0,gap:!0,p:!0,color:"attention",surface:!0,layout:"start center",children:[r.jsx(t,{...e}),r.jsx(t,{...e}),r.jsx(t,{...e})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <TextSkeleton {...args} />;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap p color="attention" surface layout="start center">
                <TextSkeleton {...args} />
                <TextSkeleton {...args} />
                <TextSkeleton {...args} />
            </Box>;
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","OnBackground"];export{o as Default,n as OnBackground,l as __namedExportsOrder,p as default};
