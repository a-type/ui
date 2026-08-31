import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Box-AeM6K2f6.js";import{n as i,t as a}from"./Button-BC1L4JFj.js";import{r as o,t as s}from"./Tooltip-CM_o-tRN.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o(),c=t(),l={title:`Components/Tooltip`,component:s,argTypes:{color:{control:`select`,options:[`contrast`,`neutral`,`attention`]}},parameters:{controls:{expanded:!0}},args:{content:`hello world`,color:`contrast`}},u={render:e=>(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{children:`Hover me`})})},d={render:e=>(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{children:`Hover me`})}),args:{disabled:!0}},f={render:e=>(0,c.jsx)(s,{open:!0,...e,children:(0,c.jsx)(a,{children:`Hover me`})}),args:{color:`neutral`}},p={render:e=>(0,c.jsx)(s,{open:!0,...e,content:(0,c.jsx)(r,{col:!0,p:!0,children:`Some content`}),children:(0,c.jsx)(a,{children:`Hover me`})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>,
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip open {...args}>
            <Button>Hover me</Button>
        </Tooltip>,
  args: {
    color: 'neutral'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip open {...args} content={<Box col p>
                    Some content
                </Box>}>
            <Button>Hover me</Button>
        </Tooltip>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Disabled`,`Color`,`Customized`]})))()}h();export{f as Color,p as Customized,u as Default,d as Disabled,m as __namedExportsOrder,l as default};