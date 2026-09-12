import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CIURYGHw.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./TextArea-BBC40n3_.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),r(),o=n(),s={title:`Components/TextArea`,component:i,argTypes:{},parameters:{controls:{expanded:!0}}},c={args:{autoSize:!0}},l={args:{value:`This is a tall text area
it has a lot
 of content!
as in, quite a bit
I think`,autoSize:!0}},u={render(){let[e,t]=(0,a.useState)(`Initial value`);return(0,o.jsx)(i,{value:e,onValueChange:t,autoSize:!0})}},d={render(){let[e,t]=(0,a.useState)(`Initial value`);return(0,o.jsx)(i,{value:e,onChange:e=>{t(e.target.value)},autoSize:!0})}},f={args:{style:{height:400},placeholder:`This text area has a fixed height of 400px`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    autoSize: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a tall text area\\nit has a lot\\n of content!\\nas in, quite a bit\\nI think',
    autoSize: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState('Initial value');
    return <TextArea value={value} onValueChange={setValue} autoSize />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    const [value, setValue] = useState('Initial value');
    return <TextArea value={value} onChange={ev => {
      setValue(ev.target.value);
    }} autoSize />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      height: 400
    },
    placeholder: 'This text area has a fixed height of 400px'
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Tall`,`Controlled`,`ControlledFromOnChange`,`Sized`]})))()}m();export{u as Controlled,d as ControlledFromOnChange,c as Default,f as Sized,l as Tall,p as __namedExportsOrder,s as default};