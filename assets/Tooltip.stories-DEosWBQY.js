import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Button-fKwnlsy8.js";import{r as i,t as a}from"./Tooltip-HebT17o6.js";import{n as o,t as s}from"./Box-CFmvJLRd.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),n(),i(),c=t(),l={title:`Components/Tooltip`,component:a,argTypes:{color:{control:`select`,options:[`contrast`,`neutral`,`attention`]}},parameters:{controls:{expanded:!0}},args:{content:`hello world`,color:`contrast`}},u={render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(r,{children:`Hover me`})})},d={render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(r,{children:`Hover me`})}),args:{disabled:!0}},f={render:e=>(0,c.jsx)(a,{open:!0,...e,children:(0,c.jsx)(r,{children:`Hover me`})}),args:{color:`neutral`}},p={render:e=>(0,c.jsx)(a,{open:!0,...e,content:(0,c.jsx)(s,{col:!0,p:!0,children:`Some content`}),children:(0,c.jsx)(r,{children:`Hover me`})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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