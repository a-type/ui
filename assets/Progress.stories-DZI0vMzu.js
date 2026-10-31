import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Box-Fzfgogd2.js";import{n as i,t as a}from"./Progress-CzH9wc-p.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),s={title:`Components/Progress`,component:a,argTypes:{},parameters:{controls:{expanded:!0},docs:{description:{component:"Pass `value` and optionally `max` to `Progress` to show completion; `max` defaults to 100. Use `Progress.Labeled` with a `label` for a visible label and value.\n\nThe `Root`, `Track`, `Indicator`, `Label`, and `Value` parts are available for custom composition."}}}},c={render(e){return(0,o.jsxs)(r,{col:!0,gap:!0,children:[(0,o.jsx)(a,{...e,value:50,max:100}),(0,o.jsx)(a,{...e,value:100,max:100}),(0,o.jsx)(a,{...e,value:0,max:100})]})}},l={render(e){return(0,o.jsxs)(r,{col:!0,gap:!0,children:[(0,o.jsx)(a.Labeled,{...e,value:33,max:100,label:`Loading...`}),(0,o.jsx)(a.Labeled,{...e,value:100,max:100,label:`Complete`}),(0,o.jsx)(a.Labeled,{...e,value:0,max:100,label:`Starting...`})]})}},u=[`Default`,`Labeled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Default,l as Labeled,u as __namedExportsOrder,s as default};