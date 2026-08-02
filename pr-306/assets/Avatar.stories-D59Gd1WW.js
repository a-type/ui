import{j as m}from"./iframe-5VeFnoCW.js";import{A as n}from"./Avatar-B0-gaSmQ.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const g={title:"Components/Avatar",component:n,argTypes:{},parameters:{controls:{expanded:!0}}},e={render(o){return m.jsx(n,{...o})}},a={args:{imageSrc:"https://i.pravatar.cc/300",name:"John Doe"}},r={args:{name:"Jane Smith"}},s={args:{imageSrc:"http://localhost:3333/nonexistent.jpg",name:"Fallback User"}},t={args:{name:void 0,imageSrc:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Avatar {...args} />;
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://i.pravatar.cc/300',
    name: 'John Doe'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: 'http://localhost:3333/nonexistent.jpg',
    name: 'Fallback User'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined,
    imageSrc: undefined
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","WithImage","WithName","FailedImage","Empty"];export{e as Default,t as Empty,s as FailedImage,a as WithImage,r as WithName,u as __namedExportsOrder,g as default};
