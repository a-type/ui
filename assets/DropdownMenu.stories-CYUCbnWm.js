import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Icon-BO1W1Vex.js";import{n as i,t as a}from"./Box-BzM0fJam.js";import{a as o,n as s,o as c,t as l}from"./Button-BZXNPMdH.js";var u,d,f,p,m;function h(){return(h=e((()=>{i(),s(),n(),c(),u=t(),d={title:`Components/DropdownMenu`,component:o,argTypes:{},parameters:{controls:{expanded:!0}}},f={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Trigger,{render:(0,u.jsx)(l,{}),children:`Open`}),(0,u.jsxs)(o.Content,{children:[(0,u.jsxs)(o.Item,{className:`@mode-attention`,children:[(0,u.jsx)(o.Label,{children:`Item 1`}),(0,u.jsx)(o.ItemRightSlot,{children:(0,u.jsx)(r,{name:`flag`})})]}),(0,u.jsxs)(o.Item,{children:[(0,u.jsx)(o.Label,{children:`Item 2`}),(0,u.jsx)(o.ItemRightSlot,{children:(0,u.jsx)(r,{name:`add_person`})})]})]})]})}},p={render:e=>(0,u.jsxs)(a,{col:!0,gap:`xl`,items:`center`,justify:`center`,full:!0,p:`xl`,style:{marginTop:200},children:[(0,u.jsxs)(o,{open:e.open,children:[(0,u.jsx)(o.Trigger,{render:(0,u.jsx)(l,{}),children:`Top`}),(0,u.jsxs)(o.Content,{side:`top`,children:[(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 1`})}),(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 2`})})]})]}),(0,u.jsxs)(o,{open:e.open,children:[(0,u.jsx)(o.Trigger,{render:(0,u.jsx)(l,{}),children:`Right`}),(0,u.jsxs)(o.Content,{side:`right`,children:[(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 1`})}),(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 2`})})]})]}),(0,u.jsxs)(o,{open:e.open,children:[(0,u.jsx)(o.Trigger,{render:(0,u.jsx)(l,{}),children:`Left`}),(0,u.jsxs)(o.Content,{side:`left`,sideOffset:8,children:[(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 1`})}),(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 2`})})]})]}),(0,u.jsxs)(o,{open:e.open,children:[(0,u.jsx)(o.Trigger,{render:(0,u.jsx)(l,{}),children:`Bottom`}),(0,u.jsxs)(o.Content,{side:`bottom`,sideOffset:8,children:[(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 1`})}),(0,u.jsx)(o.Item,{children:(0,u.jsx)(o.Label,{children:`Item 2`})})]})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <DropdownMenu.Trigger render={<Button />}>Open</DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item className="@mode-attention">
                        <DropdownMenu.Label>Item 1</DropdownMenu.Label>
                        <DropdownMenu.ItemRightSlot>
                            <Icon name="flag" />
                        </DropdownMenu.ItemRightSlot>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 2</DropdownMenu.Label>
                        <DropdownMenu.ItemRightSlot>
                            <Icon name="add_person" />
                        </DropdownMenu.ItemRightSlot>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Box col gap="xl" items="center" justify="center" full p="xl" style={{
    marginTop: 200
  }}>
            <DropdownMenu open={args.open}>
                <DropdownMenu.Trigger render={<Button />}>Top</DropdownMenu.Trigger>
                <DropdownMenu.Content side="top">
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 1</DropdownMenu.Label>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 2</DropdownMenu.Label>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu>
            <DropdownMenu open={args.open}>
                <DropdownMenu.Trigger render={<Button />}>Right</DropdownMenu.Trigger>
                <DropdownMenu.Content side="right">
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 1</DropdownMenu.Label>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 2</DropdownMenu.Label>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu>
            <DropdownMenu open={args.open}>
                <DropdownMenu.Trigger render={<Button />}>Left</DropdownMenu.Trigger>
                <DropdownMenu.Content side="left" sideOffset={8}>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 1</DropdownMenu.Label>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 2</DropdownMenu.Label>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu>
            <DropdownMenu open={args.open}>
                <DropdownMenu.Trigger render={<Button />}>Bottom</DropdownMenu.Trigger>
                <DropdownMenu.Content side="bottom" sideOffset={8}>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 1</DropdownMenu.Label>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <DropdownMenu.Label>Item 2</DropdownMenu.Label>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu>
        </Box>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Sides`]})))()}h();export{f as Default,p as Sides,m as __namedExportsOrder,d as default};