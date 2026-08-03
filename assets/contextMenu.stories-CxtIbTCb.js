import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Button-fKwnlsy8.js";import{n as i,t as a}from"./contextMenu-dWXbNmI3.js";var o,s,c,l;function u(){return(u=e((()=>{n(),i(),o=t(),s={title:`Components/ContextMenu`,component:a,argTypes:{},parameters:{controls:{expanded:!0}}},c={render(e){return(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(a.Trigger,{children:(0,o.jsx)(r,{children:`Right Click Me`})}),(0,o.jsxs)(a.Content,{children:[(0,o.jsx)(a.Item,{onSelect:()=>alert(`Item 1 selected`),children:`Item 1`}),(0,o.jsx)(a.Item,{onSelect:()=>alert(`Item 2 selected`),children:`Item 2`}),(0,o.jsx)(a.Item,{onSelect:()=>alert(`Item 3 selected`),children:`Item 3`})]})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <ContextMenu {...args}>
                <ContextMenu.Trigger>
                    <Button>Right Click Me</Button>
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.Item onSelect={() => alert('Item 1 selected')}>
                        Item 1
                    </ContextMenu.Item>
                    <ContextMenu.Item onSelect={() => alert('Item 2 selected')}>
                        Item 2
                    </ContextMenu.Item>
                    <ContextMenu.Item onSelect={() => alert('Item 3 selected')}>
                        Item 3
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>;
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`]})))()}u();export{c as Default,l as __namedExportsOrder,s as default};