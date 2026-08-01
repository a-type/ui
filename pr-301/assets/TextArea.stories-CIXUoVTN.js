import{r as u,j as l}from"./iframe-BTd0T825.js";import{T as s}from"./TextArea-CkTXWKKN.js";import"./preload-helper-99ckj_8D.js";import"https://esm.sh/lightningcss-wasm@1.32.0";import"./Input-Cq4moBCf.js";import"./Input.module-C9Yg6vyE.js";const S={title:"Components/TextArea",component:s,argTypes:{},parameters:{controls:{expanded:!0}}},e={args:{autoSize:!0}},a={args:{value:`This is a tall text area
it has a lot
 of content!
as in, quite a bit
I think`,autoSize:!0}},t={render(){const[n,o]=u.useState("Initial value");return l.jsx(s,{value:n,onValueChange:o,autoSize:!0})}},r={render(){const[n,o]=u.useState("Initial value");return l.jsx(s,{value:n,onChange:i=>{o(i.target.value)},autoSize:!0})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    autoSize: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a tall text area\\nit has a lot\\n of content!\\nas in, quite a bit\\nI think',
    autoSize: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState('Initial value');
    return <TextArea value={value} onValueChange={setValue} autoSize />;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState('Initial value');
    return <TextArea value={value} onChange={ev => {
      setValue(ev.target.value);
    }} autoSize />;
  }
}`,...r.parameters?.docs?.source}}};const x=["Default","Tall","Controlled","ControlledFromOnChange"];export{t as Controlled,r as ControlledFromOnChange,e as Default,a as Tall,x as __namedExportsOrder,S as default};
