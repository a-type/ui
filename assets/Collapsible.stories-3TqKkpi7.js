import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DBQkIwQ0.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,r as i}from"./Collapsible-QMEXcX4K.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),r(),o=n(),s={title:`Components/CollapsibleSimple`,component:i,argTypes:{},parameters:{controls:{expanded:!0}}},c={render:()=>{let[e,t]=(0,a.useState)(2),[n,r]=(0,a.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i,{open:n,children:[(0,o.jsx)(`button`,{onClick:()=>t(e+1),children:`Increment`}),(0,o.jsx)(`button`,{onClick:()=>t(e-1),children:`Decrement`}),Array(e).fill(null).map((e,t)=>(0,o.jsxs)(`div`,{children:[`Item `,t]},t))]}),(0,o.jsx)(`button`,{onClick:()=>r(!n),children:`Toggle`})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`]})))()}u();export{c as Default,l as __namedExportsOrder,s as default};