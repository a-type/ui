import{j as n,r as i,B as u}from"./iframe-5VeFnoCW.js";import{M as o}from"./masonry-AHn_hYgy.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./timing-C8g-0Emv.js";const j={title:"Components/Masonry",component:o,argTypes:{},parameters:{controls:{expanded:!0}}},l=()=>{let r=1;return Math.random()<.1?r=2:Math.random()<.03&&(r=3),r},a=r=>Array.from({length:100},(h,p)=>{const s=100+Math.floor(Math.random()*100),[c,d]=i.useState(l);return n.jsx(u,{layout:"center center",color:"primary",surface:!0,border:!0,style:{height:s},"data-span":r?c:void 0,onClick:()=>d(m=>m===1?2:1),children:n.jsx("div",{children:s})},p)}),e={render(r){return n.jsx(o,{...r,children:a()})}},t={render(r){return n.jsx(o,{...r,children:a(!0)})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render(props) {
    return <Masonry {...props}>{content()}</Masonry>;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render(props) {
    return <Masonry {...props}>{content(true)}</Masonry>;
  }
}`,...t.parameters?.docs?.source}}};const g=["Default","WithSpan"];export{e as Default,t as WithSpan,g as __namedExportsOrder,j as default};
