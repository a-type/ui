import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{o as r,t as i}from"./Camera-CrUjKpv8.js";function a({facingMode:e}){let[t,n]=(0,o.useState)(),r=(0,o.useMemo)(()=>t?URL.createObjectURL(t):void 0,[t]);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(i,{facingMode:e,onCapture:n,style:{width:256,height:256}}),t&&(0,s.jsx)(`img`,{src:r,style:{width:`100%`}})]})}var o,s,c,l,u,d;function f(){return(f=e((()=>{o=t(),r(),s=n(),c={title:`Components/Camera`,component:i,argTypes:{},parameters:{controls:{expanded:!0}},args:{}},l={render(){return(0,s.jsx)(a,{})}},u={render(){return(0,s.jsx)(a,{facingMode:`environment`})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render() {
    return <CameraDemo />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    return <CameraDemo facingMode="environment" />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`BackCamera`]})))()}f();export{u as BackCamera,l as Default,d as __namedExportsOrder,c as default};