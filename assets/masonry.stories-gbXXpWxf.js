import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Box-CFmvJLRd.js";import{n as a,t as o}from"./masonry-B7j74mCg.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{s=t(),r(),a(),c=n(),l={title:`Components/Masonry`,component:o,argTypes:{},parameters:{controls:{expanded:!0}}},u=()=>{let e=1;return Math.random()<.1?e=2:Math.random()<.03&&(e=3),e},d=e=>Array.from({length:100},(t,n)=>{let r=100+Math.floor(Math.random()*100),[a,o]=(0,s.useState)(u);return(0,c.jsx)(i,{layout:`center center`,color:`primary`,surface:!0,border:!0,style:{height:r},"data-span":e?a:void 0,onClick:()=>o(e=>e===1?2:1),children:(0,c.jsx)(`div`,{children:r})},n)}),f={render(e){return(0,c.jsx)(o,{...e,children:d()})}},p={render(e){return(0,c.jsx)(o,{...e,children:d(!0)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render(props) {
    return <Masonry {...props}>{content()}</Masonry>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render(props) {
    return <Masonry {...props}>{content(true)}</Masonry>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithSpan`]})))()}h();export{f as Default,p as WithSpan,m as __namedExportsOrder,l as default};