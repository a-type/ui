import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{o as r,t as i}from"./Camera-CYZOllko.js";function a({facingMode:e}){let[t,n]=(0,o.useState)(),r=(0,o.useMemo)(()=>t?URL.createObjectURL(t):void 0,[t]);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(i,{facingMode:e,onCapture:n,style:{width:256,height:256}}),t&&(0,s.jsx)(`img`,{src:r,style:{width:`100%`}})]})}var o,s,c,l,u,d;function f(){return(f=e((()=>{o=t(),r(),s=n(),c={title:`Components/Camera`,component:i,argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:'`Camera` displays a live camera and sends a captured `File` to `onCapture`. Use `facingMode="environment"` to request a rear-facing camera.\n\nCamera access requires browser permission and a secure context. `format` defaults to `image/png`, but photos taken with ImageCapture are not re-encoded to that format. Use `Camera.Root` and its controls for a custom layout.'}}},args:{}},l={render(){return(0,s.jsx)(a,{})}},u={render(){return(0,s.jsx)(a,{facingMode:`environment`})}},d=[`Default`,`BackCamera`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render() {
    return <CameraDemo />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    return <CameraDemo facingMode="environment" />;
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as BackCamera,l as Default,d as __namedExportsOrder,c as default};