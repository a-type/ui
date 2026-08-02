import{j as e,ay as s,az as r}from"./iframe-5VeFnoCW.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const o={title:"Components/lists",argTypes:{},parameters:{controls:{expanded:!0}}},n={render(t){return e.jsxs(s,{...t,children:[e.jsx(s.Item,{children:"First item"}),e.jsx(s.Item,{children:"Second item"}),e.jsx(s.Item,{children:"Third item"})]})}},m={render(t){return e.jsxs(r,{...t,children:[e.jsx(r.Item,{children:"First item"}),e.jsx(r.Item,{children:"Second item"}),e.jsx(r.Item,{children:"Third item"})]})}},i={render(t){return e.jsxs(r,{...t,unstyled:!0,children:[e.jsx(r.Item,{children:"First item"}),e.jsx(r.Item,{children:"Second item"}),e.jsx(r.Item,{children:"Third item"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Ol {...args}>
                <Ol.Item>First item</Ol.Item>
                <Ol.Item>Second item</Ol.Item>
                <Ol.Item>Third item</Ol.Item>
            </Ol>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Ul {...args}>
                <Ul.Item>First item</Ul.Item>
                <Ul.Item>Second item</Ul.Item>
                <Ul.Item>Third item</Ul.Item>
            </Ul>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Ul {...args} unstyled>
                <Ul.Item>First item</Ul.Item>
                <Ul.Item>Second item</Ul.Item>
                <Ul.Item>Third item</Ul.Item>
            </Ul>;
  }
}`,...i.parameters?.docs?.source}}};const c=["OrderedList","UnorderedList","NoMarkers"];export{i as NoMarkers,n as OrderedList,m as UnorderedList,c as __namedExportsOrder,o as default};
