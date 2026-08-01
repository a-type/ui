import{n,j as e,b as o,I as s,B as p}from"./iframe-b29PHh9x.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const m={title:"Components/DropdownMenu",component:n,argTypes:{},parameters:{controls:{expanded:!0}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Trigger,{render:e.jsx(o,{}),children:"Open"}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{className:"@mode-attention",children:[e.jsx(n.Label,{children:"Item 1"}),e.jsx(n.ItemRightSlot,{children:e.jsx(s,{name:"flag"})})]}),e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Item 2"}),e.jsx(n.ItemRightSlot,{children:e.jsx(s,{name:"add_person"})})]})]})]})}},d={render:r=>e.jsxs(p,{col:!0,gap:"xl",items:"center",justify:"center",full:!0,p:"xl",style:{marginTop:200},children:[e.jsxs(n,{open:r.open,children:[e.jsx(n.Trigger,{render:e.jsx(o,{}),children:"Top"}),e.jsxs(n.Content,{side:"top",children:[e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 1"})}),e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 2"})})]})]}),e.jsxs(n,{open:r.open,children:[e.jsx(n.Trigger,{render:e.jsx(o,{}),children:"Right"}),e.jsxs(n.Content,{side:"right",children:[e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 1"})}),e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 2"})})]})]}),e.jsxs(n,{open:r.open,children:[e.jsx(n.Trigger,{render:e.jsx(o,{}),children:"Left"}),e.jsxs(n.Content,{side:"left",sideOffset:8,children:[e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 1"})}),e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 2"})})]})]}),e.jsxs(n,{open:r.open,children:[e.jsx(n.Trigger,{render:e.jsx(o,{}),children:"Bottom"}),e.jsxs(n.Content,{side:"bottom",sideOffset:8,children:[e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 1"})}),e.jsx(n.Item,{children:e.jsx(n.Label,{children:"Item 2"})})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const a=["Default","Sides"];export{t as Default,d as Sides,a as __namedExportsOrder,m as default};
