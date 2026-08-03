import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Button-fKwnlsy8.js";import{n as i,t as a}from"./Drawer-2shE44PP.js";import{c as o,o as s,t as c}from"./typography-SS0vbNkf.js";function l(){return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(c,{children:`Some content`}),(0,u.jsx)(s,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec fermentum tortor eget ligula accumsan, sit amet ullamcorper nunc ultricies. Nulla facilisi.`}),(0,u.jsx)(r,{disabled:!0,color:`primary`,children:`Click me`})]})}var u,d,f,p,m;function h(){return(h=e((()=>{n(),o(),i(),u=t(),d={title:`Components/Drawer`,component:a,argTypes:{},parameters:{controls:{expanded:!0}}},f={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Trigger,{render:(0,u.jsx)(r,{}),children:`Open`}),(0,u.jsxs)(a.Content,{children:[(0,u.jsx)(a.Title,{children:`Hello world`}),(0,u.jsx)(l,{}),(0,u.jsxs)(a.Actions,{children:[(0,u.jsx)(a.Close,{}),(0,u.jsx)(r,{emphasis:`primary`,children:`Accept`})]})]})]})}},p={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Trigger,{render:(0,u.jsx)(r,{}),children:`Open`}),(0,u.jsxs)(a.Content,{disableDefaultClose:!0,children:[(0,u.jsx)(a.Title,{children:`No default close`}),(0,u.jsx)(l,{}),(0,u.jsx)(a.Actions,{children:(0,u.jsx)(a.Close,{})})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Drawer.Trigger render={<Button />}>Open</Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Title>Hello world</Drawer.Title>
                    <DummyContent />
                    <Drawer.Actions>
                        <Drawer.Close />
                        <Button emphasis="primary">Accept</Button>
                    </Drawer.Actions>
                </Drawer.Content>
            </>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Drawer.Trigger render={<Button />}>Open</Drawer.Trigger>
                <Drawer.Content disableDefaultClose>
                    <Drawer.Title>No default close</Drawer.Title>
                    <DummyContent />
                    <Drawer.Actions>
                        <Drawer.Close />
                    </Drawer.Actions>
                </Drawer.Content>
            </>
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`NoDefaultClose`]})))()}h();export{f as Default,p as NoDefaultClose,m as __namedExportsOrder,d as default};