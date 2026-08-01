import{j as e,b as o}from"./iframe-b29PHh9x.js";import{C as t}from"./contextMenu-BW7vfBjR.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const a={title:"Components/ContextMenu",component:t,argTypes:{},parameters:{controls:{expanded:!0}}},n={render(r){return e.jsxs(t,{...r,children:[e.jsx(t.Trigger,{children:e.jsx(o,{children:"Right Click Me"})}),e.jsxs(t.Content,{children:[e.jsx(t.Item,{onSelect:()=>alert("Item 1 selected"),children:"Item 1"}),e.jsx(t.Item,{onSelect:()=>alert("Item 2 selected"),children:"Item 2"}),e.jsx(t.Item,{onSelect:()=>alert("Item 3 selected"),children:"Item 3"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const u=["Default"];export{n as Default,u as __namedExportsOrder,a as default};
