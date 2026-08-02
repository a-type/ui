import{r as l,j as e}from"./iframe-5VeFnoCW.js";import{C as a}from"./Collapsible--ON8Otle.js";import"./preload-helper-UbLxuh7M.js";import"https://esm.sh/lightningcss-wasm@1.32.0";const C={title:"Components/CollapsibleSimple",component:a,argTypes:{},parameters:{controls:{expanded:!0}}},t={render:()=>{const[n,o]=l.useState(2),[r,c]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(a,{open:r,children:[e.jsx("button",{onClick:()=>o(n+1),children:"Increment"}),e.jsx("button",{onClick:()=>o(n-1),children:"Decrement"}),new Array(n).fill(null).map((i,s)=>e.jsxs("div",{children:["Item ",s]},s))]}),e.jsx("button",{onClick:()=>c(!r),children:"Toggle"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(2);
    const [open, setOpen] = useState(false);
    return <>
                <CollapsibleSimple open={open}>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                    {new Array(count).fill(null).map((_, i) => <div key={i}>Item {i}</div>)}
                </CollapsibleSimple>
                <button onClick={() => setOpen(!open)}>Toggle</button>
            </>;
  }
}`,...t.parameters?.docs?.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,C as default};
