import{j as e,r as s}from"./iframe-CLDG_V9g.js";import{C as o}from"./Camera-BUs6dM6V.js";import"./preload-helper-Cq-3Hqs1.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const x={title:"Components/Camera",component:o,argTypes:{},parameters:{controls:{expanded:!0}},args:{}},t={render(){return e.jsx(n,{})}},a={render(){return e.jsx(n,{facingMode:"environment"})}};function n({facingMode:m}){const[r,c]=s.useState(),d=s.useMemo(()=>r?URL.createObjectURL(r):void 0,[r]);return e.jsxs("div",{children:[e.jsx(o,{facingMode:m,onCapture:c,style:{width:256,height:256}}),r&&e.jsx("img",{src:d,style:{width:"100%"}})]})}t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render() {
    return <CameraDemo />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render() {
    return <CameraDemo facingMode="environment" />;
  }
}`,...a.parameters?.docs?.source}}};const C=["Default","BackCamera"];export{a as BackCamera,t as Default,C as __namedExportsOrder,x as default};
