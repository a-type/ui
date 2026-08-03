import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./TextArea-bxaEiXlE.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),s={title:`Components/TextArea`,component:i,argTypes:{},parameters:{controls:{expanded:!0}}},c={args:{autoSize:!0}},l={args:{value:`This is a tall text area
it has a lot
 of content!
as in, quite a bit
I think`,autoSize:!0}},u={render(){let[e,t]=(0,a.useState)(`Initial value`);return(0,o.jsx)(i,{value:e,onValueChange:t,autoSize:!0})}},d={render(){let[e,t]=(0,a.useState)(`Initial value`);return(0,o.jsx)(i,{value:e,onChange:e=>{t(e.target.value)},autoSize:!0})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Tall`,`Controlled`,`ControlledFromOnChange`]})))()}p();export{u as Controlled,d as ControlledFromOnChange,c as Default,l as Tall,f as __namedExportsOrder,s as default};