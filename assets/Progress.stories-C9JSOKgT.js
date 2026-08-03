import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Progress-2IRqhZNC.js";import{n as i,t as a}from"./Box-CFmvJLRd.js";var o,s,c,l,u;function d(){return(d=e((()=>{i(),n(),o=t(),s={title:`Components/Progress`,component:r,argTypes:{},parameters:{controls:{expanded:!0}}},c={render(e){return(0,o.jsxs)(a,{col:!0,gap:!0,children:[(0,o.jsx)(r,{...e,value:50,max:100}),(0,o.jsx)(r,{...e,value:100,max:100}),(0,o.jsx)(r,{...e,value:0,max:100})]})}},l={render(e){return(0,o.jsxs)(a,{col:!0,gap:!0,children:[(0,o.jsx)(r.Labeled,{...e,value:33,max:100,label:`Loading...`}),(0,o.jsx)(r.Labeled,{...e,value:100,max:100,label:`Complete`}),(0,o.jsx)(r.Labeled,{...e,value:0,max:100,label:`Starting...`})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap>
                <Progress {...args} value={50} max={100} />
                <Progress {...args} value={100} max={100} />
                <Progress {...args} value={0} max={100} />
            </Box>;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Box col gap>
                <Progress.Labeled {...args} value={33} max={100} label="Loading..." />
                <Progress.Labeled {...args} value={100} max={100} label="Complete" />
                <Progress.Labeled {...args} value={0} max={100} label="Starting..." />
            </Box>;
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Labeled`]})))()}d();export{c as Default,l as Labeled,u as __namedExportsOrder,s as default};